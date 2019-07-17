var mysql      = require('mysql');
var sql = "ALTER TABLE Customers ADD COLUMN ID INT AUTO_INCREMENT PRIMARY KEY";
var connection = mysql.createConnection({
	database : 'NodeDB',
    host     : 'localhost',
	port	 : '3306',
    user     : 'root',
    password : ''
});
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Primary Key!");
});