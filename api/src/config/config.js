const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    host: process.env.HOSTNAME,
    user: process.env.USERNAME,
    database: process.env.DBNAME,
    password: process.env.PASSWORD,
}