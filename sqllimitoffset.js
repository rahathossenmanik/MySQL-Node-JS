var mysql      = require('mysql');
var start	   = 4
var sql = "SELECT * FROM Customers LIMIT 5 OFFSET ?";
var connection = mysql.createConnection({
	database : 'NodeDB',
    host     : 'localhost',
	port	 : '3306',
    user     : 'root',
    password : ''
});
connection.query(sql, [start-1], function (err, result) {
    if (err) throw err;
    console.log(result);
});