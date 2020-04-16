const userDataService = {
	getAllUserData(knex) {
		return knex.select('*').from('users')
	},

	insertUserData(knex, newData) {
		return knex
			.insert(newData)
			.into('users')
			.returning('*')
			.then(rows => {
				return rows[0]
			})
	},


	deleteUserData(knex, id) {
		return knex('users')
			.where({
				id
			})
			.delete()
	},

	updateUserData(knex, id, newUserDataFields) {
		return knex('users')
			.where({
				id
			})
			.update(newUserDataFields)
    },
    

}

module.exports = userDataService;