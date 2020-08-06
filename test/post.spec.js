const knex = require('knex')
const xss = require('xss')
const app = require('../src/app')
const helpers = require('./test-helpers.js')
const postsStore = require('./posts-store')

const testPost = {
	"movie_db_id": 272,
	"post_content": "this is the test post",
	"post_title": "test post test post",
	"user_id": 1, 
	"username": "christian"
}


describe('Posts endpoints', () => {
    let db

    // const movies = helpers.makeMoviesArray()
    // console.log(movies)

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('cleanup', () => helpers.cleanTables(db))

    afterEach('cleanup', () => helpers.cleanTables(db))

    describe('posts endpoint', () => {

        context(`returns all posts`, () => {
            beforeEach('insert posts', () => {
                // console.log(helpers.seedPosts, 'this is the seedposts log')
                helpers.seedPosts(
                    db,
                    postsStore,
                )
            })
            it(`responds with 200 and a list`, () => {
                // const validUser = testUsers[0]
                return supertest(app)
                    .get(`/posts/posts`)
                    // .set('Authorization', helpers.makeAuthHeader(validUser))
                    .expect(200)
                    .expect(res => {
                        expect(res.body).to.be.a('array');
                    });
            })
        })

        context(`posts a post`, () => {
            it(`responds with 201 and an obj`, () => {
                return supertest(app)
                    .post(`/posts/posts`)
                    .send(testPost)
                    // .set('Authorization', helpers.makeAuthHeader(validUser))
                    .expect(201)
                    // .expect(res => {
                    //     expect(res.body).to.be.a('array');
                    // });
            })
        })
    })
})
