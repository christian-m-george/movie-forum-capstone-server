const postDataService = {
	// getAllPosts(knex) {
	// 	return knex.select('posts').from('api_data')
	// },

	insertPost(knex, newMovie) {
		return knex
			.insert(newMovie)
			.into('api_data')
			.returning('*')
			.then(rows => {
				return rows[0]
			})
	},

	// getById(knex, id) {
	// 	return knex
	// 		.from('api_data')
	// 		.select('*')
	// 		.where('id', id)
	// 		.first()
	// },

	getByUserId(knex, user_id) {
		console.log(user_id)
		return knex
			.from('posts')
			.select('*')
			.where('id', user_id)
			.first()
	},

	deletePost(knex, id) {
		return knex('posts')
			.where({
				id
			})
			.delete()
	},

	// updateMovie(knex, id, newWineFields) {
	// 	return knex('api_data')
	// 		.where({
	// 			id
	// 		})
	// 		.update(newFolderFields)
	// },
}

module.exports = apiDataService;