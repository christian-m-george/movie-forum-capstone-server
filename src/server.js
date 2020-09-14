const knex = require('knex');
const https = require('https');
const http = require('http');
const cors = require('cors');
const unirest = require('unirest');

const app = require('./app');
const {
	PORT,
	DATABASE_URL
} = require('./config');


app.use(cors())

const db = knex({
	client: 'pg',
	connection: DATABASE_URL
})

app.set('db', db);

app.use(require('../apiData/api-data-router'));
app.use(require('../userData/user-data-router.js'));
app.use(require('../postData/post-data-router.js'));
app.use(require('../auth/auth-router.js'));

// https://api.themoviedb.org/3/search/movie?api_key=70ba99fec3f2ffeb58b1814b7fb15905&language=en-US&query=river%20runs%20through%20it

//external API call working 

// local API endpoints


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})