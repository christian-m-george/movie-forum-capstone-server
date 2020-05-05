
const apiDataService = {
	getAllMovies(knex) {
		console.log(knex)
		return knex.select('*').from('movies')
	},

	insertMovie(knex, newMovie) {
		return knex.raw(`
		INSERT INTO movies ("movie_db_id", "movie_title" ,"release_date", "average_rating", "genre", "overview", "img") 
		VALUES ('${newMovie.movie_db_id}', 
				'${newMovie.movie_title.replace(/["']/g, "")}', 
				'${newMovie.release_date}', 
				'${newMovie.average_rating}', 
				'${newMovie.genre}', 
				'${newMovie.overview.replace(/["']/g, "")}',
				'${newMovie.img}' 
				)
				ON CONFLICT("movie_db_id") DO NOTHING;
 		`)
			.then(rows => {

				return rows
			})
	},

	getById(knex, id) {
		return knex
			.from('movies')
			.select('*')
			.where('movie_db_id', id)
			.first()
	},

	getByName(knex, name) {
		console.log(name)
		return knex
			.from('movies')
			.select('*')
			.where('name', 'LIKE', `%${name}%`)
			.first()
	},

	// deleteMovie(knex, id) {
	// 	return knex('api_data')
	// 		.where({
	// 			id
	// 		})
	// 		.delete()
	// },

	// updateMovie(knex, id, newMovieFields) {
	// 	return knex('api_data')
	// 		.where({
	// 			id
	// 		})
	// 		.update(newFolderFields)
	// },
}

module.exports = apiDataService;