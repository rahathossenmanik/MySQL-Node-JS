var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
	port	 : '3306',
    user     : 'root',
    password : ''
});
connection.query("DROP DATABASE TestDB;", function (err, result) {
    if (err) throw err;
    console.log("Database Deleted!");
});