const config = require('./config')
const util = require('util');

var mysql = require('mysql');

const connection = mysql.createPool({
  connectionLimit: 100,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  multipleStatements: true
});

connection.query = util.promisify(connection.query);

module.exports = connection