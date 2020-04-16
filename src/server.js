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
	let emitter = new events.EventEmitter();
	let options = {
		host: 'https://api.themoviedb.org',
		path: '/3/search/movie?api_key=70ba99fec3f2ffeb58b1814b7fb15905&language=en-US&query=/' + query,
		method: 'GET',
		headers: {
			'Authorization': "70ba99fec3f2ffeb58b1814b7fb15905",
			'Content-Type': "application/json",
			// 'Port': 443,
		}
	};

	https.get(options, function (res) {
		res.on('data', function (chunk) {
			emitter.emit('end', JSON.parse(chunk));
		});
	}).on('error', function (e) {
		emitter.emit('error', e);
	});
	return emitter;
};

// local API endpoints
app.get('/search/movie/:movieQuery', function (req, res) {

	//external api function call and response
	let searchReq = getMovies(req.params.movieQuery);

	//get the data from the first api call
	searchReq.on('end', function (newMovie) {
		console.log(newMovie.movie);
		//database conection 
		let dbSaveMovie = [];
		for (let i = 0; i < newMovie.movie.length; i++) {
			let movieName = newMovie.movie[i].name
			let movieNameLowerCase = movieName.toLowerCase();
			let movieQueryLowerCase = req.params.movieQuery.toLowerCase();
			dbSaveMovie[i] = {
				image: newMovie.movie[i].backdrop_path,
				title: newMovie.movie[i].title,
				releaseDate: newMovie.movie[i].release_date,
				rating: newMovie.movie[i].vote_average,
                synopsis: newMovie.movie[i].overview,
                genre: newMovie.movie[i].genre_ids
			};
		}
		apiDataService.insertMovie(req.app.get('db'), dbSaveMovie)
			.then(newMovie => {
				res
					.status(201)
					.json(newMovie.movie)
			})
		res.json(dbSaveMovie);
	});

	//error handling
	searchReq.on('error', function (code) {
		res.sendStatus(code);
	});
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})