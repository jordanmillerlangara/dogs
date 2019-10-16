const mysql = require('mysql');

const connectionPool = mysql.createPool({
  connectionLimit:10,		// max number of simultaneous connections
  host     : process.env.DB_HOST,		// 'localhost' for test environment
  user     : process.env.DB_USER,	// 'root' if using test environment	
  password : process.env.DB_PASS,   	// blank for test environment
  database : process.env.DB_NAME,
  multipleStatements: true	// Allows us to execute more than one statement in a query
});

exports.cp = connectionPool;
