const express = require('express');
const xss = require('xss');
const path = require('path');
const apiDataService = require('./api-data-service')
const moviesRouter = express.Router();
const jsonParser = express.json();


moviesRouter
    .route('/all')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        apiDataService.getAllMovies(knexInstance)
            .then(movies => {
                console.log(movies)
                res.json(movies.map(movies => ({
                    ...movies,
                })))
            })
            .catch(err => {
                next(err);
            });
    })


// moviesRouter
// 	.route('/movies-by-id/:id')
// 	.all((req, res, next) => {
// 		apiDataService.getById(req.app.get('db'), req.params.id)
// 			.then(movies => {
// 				if (!movies) {
// 					return res.status(404).json({
// 						error: {
// 							message: `No movies by id to display`
// 						}
// 					})
// 				}
// 				res.movies = movies // save the note for the next middleware
// 				next()
// 			})
// 			.catch(next)
// 	})
// 	.get((req, res, next) => {
// 		res.json(res.movies)
// 	})


moviesRouter
    .route('/movies-by-title/:title')
    .all((req, res, next) => {
        apiDataService.getByName(req.app.get('db'), req.params.title)
            .then(movies => {
                console.log(req.params.title);
                console.log(movies);
                if (!movies) {
                    return res.status(404).json({
                        error: {
                            message: `No movies by name to display`
                        }
                    })
                }
                res.movies = movies // save the note for the next middleware
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(res.movies)
    })






module.exports = moviesRouter