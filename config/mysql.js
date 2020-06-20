let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'test_user',
    password: 'test_pass',
    database: 'test',
    insecureAuth: true,
    multipleStatements: true
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

module.exports = connection;