const path = require('path')
const express = require('express')
const xss = require('xss')
const commentDataService = require('./comment-data-service')
// const { requireAuth } = require('../middleware/jwt-auth')

const commentsRouter = express.Router()
const jsonParser = express.json()

const serializeComment = comment => ({
    user_id: comment.user_id,
    post_id: comment.post_id,
    comment_content: xss(comment.comment),
})

commentsRouter
    .route('/comments')
    .get((req, res, next) => {
        commentDataService.getAllComments(req.app.get('db'))
            .then(comments => {
                res.json(comments)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { user_id, post_id, comment_content } = req.body
        const newComment = {  user_id, post_id, comment_content }

        for (const [key, value] of Object.entries(newComment))
            if (value == null)
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })

        newComment.user_id = user_id
        // newComment.user_id = user.user_id

        commentDataService.insertComment(
            req.app.get('db'),
            newComment
        )
            .then(comment => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `${comment.id}`))
                    .json(serializeComment(comment))
            })
            .catch(next)
    })

commentsRouter
    .route('/:object_id')
    .all((req, res, next) => {
        commentDataService.getCommentById(req.app.get('db'), req.params.object_id)
            .then(comments => {
                if (!comments) {
                    return res.status(404).json({
                        error: { message: `No comments exist` }
                    })
                }
                res.comments = comments
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(res.comments)
    })

module.exports = commentsRouter