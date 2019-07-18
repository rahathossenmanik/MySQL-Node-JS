var mysql      = require('mysql');
var sql = "SELECT Name, Address FROM Customers";
var connection = mysql.createConnection({
	database : 'NodeDB',
    host     : 'localhost',
	port	 : '3306',
    user     : 'root',
    password : ''
});
connection.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
});