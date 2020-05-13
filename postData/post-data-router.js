const path = require('path')
const express = require('express')
const xss = require('xss')
const postDataService = require('./post-data-service')
// const { requireAuth } = require('../middleware/jwt-auth')

const postRouter = express.Router()
const jsonParser = express.json()

// const serializePost = post => ({
//     user_id: post.user_id,
//     movie_id: post.movie_id,
//     post_title: xss(post_title),
//     post_content: xss(post_content)
// })

postRouter
    .route('/posts')
    .get((req, res) => {
        console.log('this is working ********** this is the log')
        postDataService.getPosts(req.app.get('db'))
            .then(posts => {
                res.json(posts)
            })
            .catch()
    })
    .post(jsonParser, (req, res, next) => {
        console.log(req.body, 'this is the req body')
        const { user_id, movie_db_id, post_title, post_content } = req.body
        const newPost = {  user_id, movie_db_id, post_title, post_content }

        for (const [key, value] of Object.entries(newPost))
            if (value == null)
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })

        // newPost.user_id = user_id
        // newPost.user_id = req.user.user_id
        console.log('this is the console log ****************************', newPost)
        postDataService.insertPost(
            req.app.get('db'),
            newPost
        )
            .then(post => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `${post.id}`))
                    // .json(serializePost(post))
                    .json(post)
            })
            .catch(err => console.log(err))
    })

postRouter
    .route('/posts/:movie_id')
    .get((req, res) => {
        // console.log('hitting route')
        postDataService.getByMovieId(req.app.get('db'), req.params.movie_id)
            .then(post => {
                if (!post) {
                    return res.status(404).json({
                        error: { message: `No posts exist` }
                    })
                }
                res.json(post)
            })
            .catch(err => {
                console.log(err)
            })
            
    })

module.exports = postRouter;