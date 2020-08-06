const postsStore = [
    {
        "id": 5,
        "movie_db_id": 1924,
        "user_id": 1,
        "username": "christian",
        "post_title": "test post 1",
        "post_content": "test content 1",
        "created_at": "2020-05-15T05:43:39.466Z"
    },
    {
        "id": 6,
        "movie_db_id": 1924,
        "user_id": 1,
        "username": "christian",
        "post_title": "test post 2",
        "post_content": "Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content Much Longer content ",
        "created_at": "2020-05-15T05:48:43.138Z"
    },
    {
        "id": 7,
        "movie_db_id": 1924,
        "user_id": 1,
        "username": "christian",
        "post_title": "post 3",
        "post_content": "post content post contentpost contentpost contentpost content",
        "created_at": "2020-05-15T07:10:15.800Z"
    },
    {
        "id": 8,
        "movie_db_id": 272,
        "user_id": 1,
        "username": "christian",
        "post_title": "test post 4",
        "post_content": "test content test content test content test content test content test content test content test content test content test content test content test content test content ",
        "created_at": "2020-05-15T07:11:14.823Z"
    },
    {
        "id": 9,
        "movie_db_id": 272,
        "user_id": 1,
        "username": "christian",
        "post_title": "post 5",
        "post_content": "post content",
        "created_at": "2020-05-15T07:28:18.936Z"
    },
    {
        "id": 10,
        "movie_db_id": 272,
        "user_id": 1,
        "username": "christian",
        "post_title": "new post 6",
        "post_content": "test post 6",
        "created_at": "2020-05-15T07:30:56.663Z"
    },
    {
        "id": 11,
        "movie_db_id": 272,
        "user_id": 1,
        "username": "christian",
        "post_title": "new post 7",
        "post_content": "test content",
        "created_at": "2020-05-15T07:32:19.741Z"
    },
    {
        "id": 12,
        "movie_db_id": 272,
        "user_id": 1,
        "username": "christian",
        "post_title": "test post 8 ",
        "post_content": "test content",
        "created_at": "2020-05-15T07:37:31.236Z"
    },
    {
        "id": 13,
        "movie_db_id": 1924,
        "user_id": 1,
        "username": "christian",
        "post_title": "test post",
        "post_content": "new note",
        "created_at": "2020-05-15T07:39:02.913Z"
    },
    {
        "id": 14,
        "movie_db_id": 91314,
        "user_id": 1,
        "username": "christian",
        "post_title": "post on transformers",
        "post_content": "was not a great movie but megan fox looked good",
        "created_at": "2020-05-16T00:24:50.707Z"
    },
    {
        "id": 15,
        "movie_db_id": 251519,
        "user_id": 3,
        "username": "gabriela",
        "post_title": "new post on son of batman",
        "post_content": "test content",
        "created_at": "2020-05-16T06:44:23.809Z"
    },
    {
        "id": 16,
        "movie_db_id": 557,
        "user_id": 1,
        "username": "christian",
        "post_title": "new post",
        "post_content": "new post on spiderman",
        "created_at": "2020-05-17T02:03:43.403Z"
    },
    {
        "id": 17,
        "movie_db_id": 238,
        "user_id": 5,
        "username": "ednondg1960",
        "post_title": "this movie was greate",
        "post_content": "my name is ed and i really liked this movie. i liked the part where the guy gos pew pew pew and shoots the other guy haha",
        "created_at": "2020-05-17T03:01:00.715Z"
    },
    {
        "id": 18,
        "movie_db_id": 49849,
        "user_id": 5,
        "username": "ednondg1960",
        "post_title": "what a shit movie",
        "post_content": "i cant believe they actually made this ",
        "created_at": "2020-05-17T03:01:30.149Z"
    },
    {
        "id": 19,
        "movie_db_id": 449563,
        "user_id": 6,
        "username": "nikki360",
        "post_title": "romcom for the ages",
        "post_content": "great fun movie and soundtrack",
        "created_at": "2020-05-17T03:05:46.388Z"
    },
    {
        "id": 20,
        "movie_db_id": 194662,
        "user_id": 7,
        "username": "alexg",
        "post_title": "this was a good movie",
        "post_content": "i really liked how it looked like one continuous shot",
        "created_at": "2020-05-17T04:50:35.901Z"
    },
    {
        "id": 21,
        "movie_db_id": 272,
        "user_id": 3,
        "username": "gabriela",
        "post_title": "the beginning of a great trilogy",
        "post_content": "christopher nolan did a lot of credit to the batman saga with this movie and his subsequent movies which unfortunately DC has been unable to capitalize on. justice league and superman movies had a lot of potential but consistently failed to deliver ",
        "created_at": "2020-05-17T05:13:29.964Z"
    },
    {
        "id": 22,
        "movie_db_id": 1924,
        "user_id": 3,
        "username": "gabriela",
        "post_title": "new post",
        "post_content": "post by gabriela",
        "created_at": "2020-05-18T03:58:36.875Z"
    },
    {
        "id": 23,
        "movie_db_id": 272,
        "user_id": 3,
        "username": "gabriela",
        "post_title": "batman post",
        "post_content": "content",
        "created_at": "2020-05-18T04:03:56.186Z"
    },
    {
        "id": 24,
        "movie_db_id": 272,
        "user_id": 3,
        "username": "gabriela",
        "post_title": "arsalan post",
        "post_content": "post",
        "created_at": "2020-05-18T04:07:52.388Z"
    },
    {
        "id": 25,
        "movie_db_id": 1924,
        "user_id": 3,
        "username": "gabriela",
        "post_title": "arsalan post 2",
        "post_content": "post",
        "created_at": "2020-05-18T04:09:25.206Z"
    },
    {
        "id": 26,
        "movie_db_id": 1924,
        "user_id": 3,
        "username": "gabriela",
        "post_title": "arsalan post 3",
        "post_content": "post",
        "created_at": "2020-05-18T04:11:33.273Z"
    }
]

module.exports = {postsStore}