var mysql      = require('mysql');
var sql = "UPDATE Customers SET Address = 'Canyon 123' WHERE Address = 'Valley 345'";
var connection = mysql.createConnection({
	database : 'NodeDB',
    host     : 'localhost',
	port	 : '3306',
    user     : 'root',
    password : ''
});
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
	console.log(result);
});