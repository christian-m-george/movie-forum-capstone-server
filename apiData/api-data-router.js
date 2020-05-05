const express = require('express');
const xss = require('xss');
const path = require('path');
const apiDataService = require('./api-data-service')
const moviesRouter = express.Router();
const events = require('events');
const https = require('https');
const http = require('http');
const jsonParser = express.json();



let getMovies = function (query) {
    // console.log('inside get movie function', query)
    let emitter = new events.EventEmitter();
    let options = {
        host: 'api.themoviedb.org',
        path: '/3/search/movie?api_key=70ba99fec3f2ffeb58b1814b7fb15905&language=en-US&query=' + query,
        method: 'GET',
        headers: {
            'Authorization': "70ba99fec3f2ffeb58b1814b7fb15905",
            'Content-Type': "application/json",
            'Port': 443,
        }
    };
    let output = '';
    https.get(options, function (res) {
        res.on('data', function (chunk) {
            output += chunk
            // console.log(JSON.stringify(chunk), 'chunk response')
            emitter.emit('end', JSON.parse(output));
        });
    }).on('error', function (e) {
        // console.log(e, 'this is the error log')
        emitter.emit('error', e);
    });
    return emitter;
};




moviesRouter
    .route('/movie/all')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        apiDataService.getAllMovies(knexInstance)
            .then(movies => {
                // console.log(movies)
                res.json(movies.map(movies => ({
                    ...movies,
                })))
            })
            .catch(err => {
                next(err);
            });
    })

moviesRouter
    .route('/movie/search/:searchTerm')
    .get((req, res, next) => {


        // knex.raw(knex('rates').insert(allRates).toString().replace('insert', 'INSERT IGNORE'));
        console.log(req.params.searchTerm, 'server search term log')
        //external api function call and response
        let searchReq = getMovies(req.params.searchTerm);
        // console.log(searchReq)
        //get the data from the first api call
        searchReq.on('end', function (newMovie) {
            // console.log(newMovie.results.length, 'logging movie response');
            // console.log(newMovie.results.length, 'logging movie response length');
            //database conection

            let dbSaveMovie = [];
            for (let i = 0; i < newMovie.results.length; i++) {
                // console.log(newMovie[i], 'logging newmovie array')
                let apiMovieId = newMovie.results[i].id
                let outputGenreString = 'western';
                if (newMovie.results[i].genre_ids[0] == 27) {
                    outputGenreString = 'horror'
                }
                else if (newMovie.results[i].genre_ids[0] == 28) {
                    outputGenreString = 'action'
                }
                else if (newMovie.results[i].genre_ids[0] == 12) {
                    outputGenreString = 'adventure'
                }
                else if (newMovie.results[i].genre_ids[0] == 16) {
                    outputGenreString = 'animation'
                }
                else if (newMovie.results[i].genre_ids[0] == 35) {
                    outputGenreString = 'comedy'
                }
                else if (newMovie.results[i].genre_ids[0] == 80) {
                    outputGenreString = 'crime'
                }
                else if (newMovie.results[i].genre_ids[0] == 99) {
                    outputGenreString = 'documentary'
                }
                else if (newMovie.results[i].genre_ids[0] == 18) {
                    outputGenreString = 'drama'
                }
                else if (newMovie.results[i].genre_ids[0] == 10751) {
                    outputGenreString = 'family'
                }
                else if (newMovie.results[i].genre_ids[0] == 14) {
                    outputGenreString = 'fantasy'
                }
                else if (newMovie.results[i].genre_ids[0] == 36) {
                    outputGenreString = 'history'
                }
                else if (newMovie.results[i].genre_ids[0] == 10402) {
                    outputGenreString = 'music'
                }
                else if (newMovie.results[i].genre_ids[0] == 9648) {
                    outputGenreString = 'mystery'
                }
                else if (newMovie.results[i].genre_ids[0] == 10749) {
                    outputGenreString = 'romance'
                }
                else if (newMovie.results[i].genre_ids[0] == 878) {
                    outputGenreString = 'science fiction'
                }
                else if (newMovie.results[i].genre_ids[0] == 10770) {
                    outputGenreString = 'tv movie'
                }
                else if (newMovie.results[i].genre_ids[0] == 53) {
                    outputGenreString = 'thriller'
                }
                else if (newMovie.results[i].genre_ids[0] == 10752) {
                    outputGenreString = 'war'
                }

                let imgOutputString = 'https://legacyogden.com/wp-content/uploads/2015/07/No-Image-Available1.png';
                if (newMovie.results[i].backdrop_path) {
                    imgOutputString = newMovie.results[i].backdrop_path
                }

                let dateOutputString = '1900-01-01';
                if (newMovie.results[i].release_date) {
                    dateOutputString = newMovie.results[i].release_date
                }
                // check to see if movie[i] exists in DB


                // if movie does not exist in DB, save movie to DB and return movie as json
                // else {
                // console.log('else')
                // let movieFound = true
                // movieFound = apiDataService.getById(req.app.get('db'), apiMovieId)
                //     .then(movies => {
                //         console.log('these are the movies in DB', movies)
                //         if (movies == undefined) {
                //             return false;
                //         }
                //         // return true; 
                //         next()
                //     })
                //     .catch(err => {
                //         console.log(err)
                //         next()
                //     })
                // console.log(movieFound, 'this is the movie found')

                // if (movieFound == false) {
                //     dbSaveMovie[i] = {
                //         movie_db_id: apiMovieId,
                //         img: imgOutputString,
                //         movie_title: newMovie.results[i].title,
                //         release_date: dateOutputString,
                //         average_rating: newMovie.results[i].vote_average,
                //         genre: outputGenreString,
                //         overview: newMovie.results[i].overview
                //     };
                // }
                dbSaveMovie[i] = {
                    movie_db_id: apiMovieId,
                    img: imgOutputString,
                    movie_title: newMovie.results[i].title,
                    release_date: dateOutputString,
                    average_rating: newMovie.results[i].vote_average,
                    genre: outputGenreString,
                    overview: newMovie.results[i].overview
                };
                apiDataService.insertMovie(req.app.get('db'), dbSaveMovie[i])
                .then(newMovie => {
                    // console.log(newMovie, 'logging newMovie within then')
                    next()
                    // res
                    //     .status(201)
                    //     .json(dbSaveMovie)
                })
                .catch(err => {
                    console.log(err);
                });
                
                // }
                

            }
            // console.log(newMovie.results, 'this is the newmovie results ******');
            // console.log(dbSaveMovie, 'logging the movie save')

            // apiDataService.insertMovie(req.app.get('db'), dbSaveMovie)
            //     .then(newMovie => {
            //         // console.log(newMovie, 'logging newMovie within then')
            //         next()
            //         // res
            //         //     .status(201)
            //         //     .json(dbSaveMovie)
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
            res.json(dbSaveMovie)
        });

        //error handling
        searchReq.on('error', function (code) {
            res.sendStatus(code);
        });
    });




moviesRouter
    .route('/movies-by-id/:id')
    .all((req, res, next) => {
        apiDataService.getById(req.app.get('db'), req.params.id)
            .then(movies => {
                // console.log('these are the movies in DB', movies)
                if (!movies) {
                    return res.status(404).json({
                        error: {
                            message: `No movies by id to display`
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


// moviesRouter
//     .route('/movies/:title')
//     .all((req, res, next) => {
//         apiDataService.getByName(req.app.get('db'), req.params.title)
//             .then(movies => {
//                 console.log(req.params.title);
//                 console.log(movies);
//                 if (!movies) {
//                     return res.status(404).json({
//                         error: {
//                             message: `No movies by name to display`
//                         }
//                     })
//                 }
//                 res.movies = movies // save the note for the next middleware
//                 next()
//             })
//             .catch(next)
//     })
//     .get((req, res, next) => {
//         res.json(res.movies)
//     })






module.exports = moviesRouter