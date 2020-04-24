const knex = require('knex');
const https = require('https');
const http = require('http');
const cors = require('cors');
const unirest = require('unirest');
const events = require('events');
const app = require('./app');
const {
	PORT,
	DATABASE_URL
} = require('./config');
// const moviesRouter = require('../apiData/api-data-router');
// const userDataRouter = require('../usersData/users-data-router');
const apiDataService = require('../apiData/api-data-service')

app.use(cors())

const db = knex({
	client: 'pg',
	connection: DATABASE_URL
})

app.set('db', db);

// https://api.themoviedb.org/3/search/movie?api_key=70ba99fec3f2ffeb58b1814b7fb15905&language=en-US&query=river%20runs%20through%20it

//external API call working 
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

	https.get(options, function (res) {
		res.on('data', function (chunk) {
			console.log(JSON.parse(chunk), 'chunk response')
			emitter.emit('end', JSON.parse(chunk));
		});
	}).on('error', function (e) {
        // console.log(e, 'this is the error log')
		emitter.emit('error', e);
	});
	return emitter;
};

// local API endpoints
app.get('/search/movie/:movieQuery', function (req, res) {


	// knex.raw(knex('rates').insert(allRates).toString().replace('insert', 'INSERT IGNORE'));
	
	//external api function call and response
	let searchReq = getMovies(req.params.movieQuery);

	//get the data from the first api call
	searchReq.on('end', function (newMovie) {
        console.log(newMovie.results.length, 'logging movie response');
        // console.log(newMovie.results.length, 'logging movie response length');
		//database conection 
		let dbSaveMovie = [];
		for (let i = 0; i < newMovie.results.length; i++) {
			// console.log(newMovie[i], 'logging newmovie array')
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

			dbSaveMovie[i] = {
				movie_db_id: newMovie.results[i].id,
				img: imgOutputString,
				movie_title: newMovie.results[i].title,
				release_date: dateOutputString,
				average_rating: newMovie.results[i].vote_average,
				genre: outputGenreString,
				overview: newMovie.results[i].overview
            };

        }
        console.log(dbSaveMovie, 'logging the movie save')
		apiDataService.insertMovie(req.app.get('db'), dbSaveMovie)
			.then(newMovie => {
				console.log(newMovie, 'logging newMovie within then')
				res
					.status(201)
					.json(newMovie)
			})
			.catch(err => {
				console.log(err);
			});
	});

	//error handling
	searchReq.on('error', function (code) {
		res.sendStatus(code);
	});
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})