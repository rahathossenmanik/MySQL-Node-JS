var mysql      = require('mysql');
var name = 'Amy';
var adr = 'Mountain 21';
var sql = "SELECT Name, Address FROM Customers WHERE Name = ? OR Address = ?";
var connection = mysql.createConnection({
	database : 'NodeDB',
    host     : 'localhost',
	port	 : '3306',
    user     : 'root',
    password : ''
});
connection.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
});