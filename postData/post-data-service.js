const postDataService = {
	getPosts(knex) {
		return knex.select('*').from('posts')
	},

	insertPost(knex, newPost) {
		return knex
			.insert(newPost)
			.into('posts')
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
}

module.exports = postDataService;