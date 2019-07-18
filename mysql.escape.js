var mysql      = require('mysql');
var adr = 'Mountain 21';
var sql = "SELECT Name, Address FROM Customers WHERE Address = " + mysql.escape(adr);
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