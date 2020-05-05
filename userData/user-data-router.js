const express = require('express')
const path = require('path')
const userRouter = express.Router()
const jsonBodyParser = express.json()
const userService = require('./user-data-service')
const bcrypt = require('bcrypt')


// All users
userRouter
    .route('/user')
    .get((req, res, next) => {
        // const { users } = {
        //     username,
        //     email,
        //     password
        // }
        userService.getAllUsers(req.app.get('db'))
            .then(user => {
                // res.json(user.map(userService.serializeUser(user)))
                res.json(user)
            })
            .catch(next)
    })
    .post(jsonBodyParser, (req, res, next) => {
        console.log(req.body, 'this is the req body')
        const { username, email, password } = req.body
        for (const field of ['username', 'email', 'password'])
            if (!req.body[field])
                return res.status(400).json({
                    error: `Missing '${field}' in request body`
                })
        const passwordError = userService.validatePassword(password)

        if (passwordError)
            return res.status(400).json({ error: passwordError })

        userService.insertUser(
            req.app.get('db'),
            newUser
        )
            .then(user => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${user.id}`))
                    .json(userService.serializeUser(user))
            })

        userService.hasUserWithUserName(
            req.app.get('db'),
            email
        )
            .then(hasUserWithUserName => {
                console.log('got this far')
                if (hasUserWithUserName)
                    return res.status(400).json({ error: `Username already taken` })

                return userService.hashPassword(password)
                    .then(hashedPassword => {
                        const newUser = {
                            username,
                            email,
                            password: hashedPassword,
                        }
                        return userService.insertUser(
                            req.app.get('db'),
                            newUser
                        )
                            .then(user => {
                                res
                                    .status(201)
                                    .location(path.posix.join(req.originalUrl, `/${user.id}`))
                                    .json(userService.serializeUser(user))
                            })
                    })
            })
            .catch(next)
    })

// Individual users by id
userRouter
    .route('/user/:user_id')
    .all((req, res, next) => {
        const { user_id } = req.params;
        userService.getById(req.app.get('db'), user_id)
            .then(user => {
                if (!user) {
                    return res
                        .status(404)
                        .send({ error: { message: `User doesn't exist.` } })
                }
                res.user = user
                next()
            })
            .catch(next)
    })
    .get((req, res) => {
        res.json(userService.serializeUser(res.user))
    })
    .delete((req, res, next) => {
        const { user_id } = req.params;
        userService.deleteUser(
            req.app.get('db'),
            user_id
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })

module.exports = userRouter