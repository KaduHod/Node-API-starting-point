require('dotenv/config')

module.exports = require('knex')({
    client: process.env.DB_CLIENT,
    connection: {
        server: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        options:{
            port: process.env.DB_PORT
        },
        port: process.env.DB_PORT
    },
    pool: {
        min: 2,
        max: 10
      }
    
})