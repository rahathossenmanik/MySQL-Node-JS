var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
	port	 : '3306',
    database : 'learning',
    user     : 'root',
    password : ''
});
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});