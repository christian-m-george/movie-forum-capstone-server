require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const moviesRouter = require('../apiData/api-data-router');
const userDataRouter = require('../userData/user-data-router');
const postDataRouter = require('../postData/post-data-router')
const commentDataRouter = require('../commentData/comment-data-router')
// const bcrypt = require('bcryptjs')
const config = require('./config')


const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())


app.use('/api/movies', moviesRouter)
app.use('/user-data', userDataRouter)
app.use('/posts', postDataRouter)
app.use('/comments', commentDataRouter)
app.get('/', (req, res) => {
    res.send('baseline working!')
})

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app