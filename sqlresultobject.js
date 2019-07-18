var mysql      = require('mysql');
var sql = "INSERT INTO Customers (Name, Address) VALUES ('Michelle', 'Blue Village 1')";
var connection = mysql.createConnection({
	database : 'NodeDB',
    host     : 'localhost',
	port	 : '3306',
    user     : 'root',
    password : ''
});
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});