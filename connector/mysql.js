var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'pfe'
});

connection.connect(function (err) {
    if(err) {
    	console.log(err)
    } else {
    	console.log('connection successfully started with MySQL')
    }
});

module.exports = connection;