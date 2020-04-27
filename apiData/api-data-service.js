const apiDataService = {
	getAllMovies(knex) {
        console.log(knex)
		return knex.select('*').from('movies')
	},

	insertMovie(knex, newMovie) {
		return knex
			.insert(newMovie)
			.into('movies')
			.returning('*')
			.then(rows => {
				return rows
			})
	},

	getById(knex, id) {
		return knex
			.from('movies')
			.select('*')
			.where('id', id)
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