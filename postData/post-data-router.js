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
    .get((req, res, next) => {
        console.log('this is working ********** this is the log')
        postDataService.getPosts(req.app.get('db'))
            .then(posts => {
                res.json(posts)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {

        console.log('logging *********** logging')
        const { user_id, movie_id, post_title, post_content } = req.body
        const newPost = {  user_id, movie_id, post_title, post_content }

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
            .catch(next)
    })

// postRouter
//     .route('/:post_id')
//     .all((req, res, next) => {
//         postDataService.getById(req.app.get('db'), req.params.post_id)
//             .then(post => {
//                 if (!post) {
//                     return res.status(404).json({
//                         error: { message: `No posts exist` }
//                     })
//                 }
//                 res.posts = posts
//                 next()
//             })
//             .catch(next)
//     })
//     .get((req, res, next) => {
//         res.json(res.posts)
//     })

module.exports = postRouter;