var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
	port	 : '3306',
    database : 'learning',
    user     : 'root',
    password : ''
});
connection.query("SELECT * FROM People;", function (err, result) {
	if (err) throw err;
	console.log("Result: " + JSON.stringify(result));
});