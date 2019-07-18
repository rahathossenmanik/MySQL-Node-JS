var mysql      = require('mysql');
var sql = "SELECT Customers.Name AS Name, Salesman.Address AS Address FROM Customers JOIN Salesman ON Customers.Name = Salesman.Name";
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