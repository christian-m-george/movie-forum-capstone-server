module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'DATABASE_URL=postgres://liqftmplrmujag:5dacb239124ff498b7f058d59b5c7d0124d07a2ee13e5a20b069d8bfb865e246@ec2-52-202-22-140.compute-1.amazonaws.com:5432/d27q9ftggao3tq',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/movie-forum-capstone-server-test',
    JWT_SECRET: process.env.JWT_SECRET 
}

