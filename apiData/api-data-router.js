const express = require("express");
const xss = require("xss");
const path = require("path");
const apiDataService = require("./api-data-service");
const moviesRouter = express.Router();
const events = require("events");
const https = require("https");
const http = require("http");
const jsonParser = express.json();
const axios = require("axios");

let getMovies = function (query) {

  console.log("function is called");

};

moviesRouter.route("/movie/all").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  apiDataService
    .getAllMovies(knexInstance)
    .then((movies) => {
      // console.log(movies)
      res.json(
        movies.map((movies) => ({
          ...movies,
        }))
      );
    })
    .catch((err) => {
      next(err);
    });
});

moviesRouter.route("/movie/search/:searchTerm").get((req, res, next) => {
  // knex.raw(knex('rates').insert(allRates).toString().replace('insert', 'INSERT IGNORE'));
  console.log(req.params.searchTerm, "server search term log");
  //external api function call and response
  //   let data = getMovies(req.params.searchTerm);
  let query = req.params.searchTerm;
  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=70ba99fec3f2ffeb58b1814b7fb15905&language=en-US&query=" +
        query
      // ,
      //   {
      //     headers: {
      //       Authorization: "70ba99fec3f2ffeb58b1814b7fb15905",
      //       "Content-Type": "application/json",
      //       Port: 443,
      //     },
      //   }
    )
    .then(function (response) {
      data = response.data.results;
      console.log(data);
      console.log(data[0].genre_ids, "this is genre id");
      let dbSaveMovie = [];
      let outputGenreString = "";
      for (let i = 0; i < data.length; i++) {
        switch (data[i].genre_ids[0]) {
          case 27:
            outputGenreString = "Horror";
            break;
          case 28:
            outputGenreString = "Action";
            break;
          case 12:
            outputGenreString = "Adventure";
            break;
          case 16:
            outputGenreString = "Animation";
            break;
          case 35:
            outputGenreString = "Comedy";
            break;
          case 80:
            outputGenreString = "Crime";
            break;
          case 99:
            outputGenreString = "Documentary";
            break;
          case 27:
            outputGenreString = "Horror";
            break;
          case 18:
            outputGenreString = "Drama";
            break;
          case 10751:
            outputGenreString = "Family";
            break;
          case 14:
            outputGenreString = "Fantasy";
            break;
          case 36:
            outputGenreString = "History";
            break;
          case 10402:
            outputGenreString = "Music";
            break;
          case 9648:
            outputGenreString = "Mystery";
            break;
          case 10749:
            outputGenreString = "Romance";
            break;
          case 878:
            outputGenreString = "Science Fiction";
            break;
          case 10770:
            outputGenreString = "TV Movie";
            break;
          case 53:
            outputGenreString = "Thriller";
            break;
          case 10752:
            outputGenreString = "War";
        }

        let apiMovieId = data[i].id;

        let imgOutputString = data[i].backdrop_path
          ? `https://image.tmdb.org/t/p/w500/${data[i].backdrop_path}`
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png";

        let dateOutputString = "1900-01-01";
        if (data[i].release_date) {
          dateOutputString = data[i].release_date;
        }

        dbSaveMovie[i] = {
          movie_db_id: apiMovieId,
          img: imgOutputString,
          movie_title: data[i].title,
          release_date: dateOutputString,
          average_rating: data[i].vote_average,
          genre: outputGenreString,
          overview: data[i].overview,
        };
        apiDataService
          .insertMovie(req.app.get("db"), dbSaveMovie[i])
          .then((data) => {
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      res.json(dbSaveMovie);
    })
    .catch((err) => console.log(err));

  // console.log(searchReq)
  //get the data from the first api call
  //   searchReq.on("end", function (newMovie) {
  // console.log(newMovie.results.length, 'logging movie response');
  // console.log(newMovie.results.length, 'logging movie response length');
  //database conection
});

moviesRouter
  .route("/movies-by-id/:id")
  .all((req, res, next) => {
    apiDataService
      .getById(req.app.get("db"), req.params.id)
      .then((movies) => {
        // console.log('these are the movies in DB', movies)
        if (!movies) {
          return res.status(404).json({
            error: {
              message: `No movies by id to display`,
            },
          });
        }
        res.movies = movies; 
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(res.movies);
  });


module.exports = moviesRouter;
