const commentDataService = {
	getAllComments(knex) {
		return knex.select('comments').from('comments')
	},

	insertComment(knex, newMovie) {
		return knex
			.insert(newMovie)
			.into('comments')
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

	getCommentById(knex, user_id) {
		console.log(user_id)
		return knex
			.from('comments')
			.select('*')
			.where('id', user_id)
			.first()
	},

	deleteComment(knex, id) {
		return knex('comments')
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

module.exports = commentDataService;