var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host: '192.168.77.81',
    user: 'vdb-manager',
    password: 'sanria@#77', // or the original password : 'apaswword'
    database: 'vs_users_temp'
});

// connect to mysql
connection.connect(function (err) {
    // in case of error
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    }
});

exports.getData = () => {
    // Perform a query
    $query = 'SELECT * FROM `user` LIMIT 10';
    connection.query($query, function (err, rows, fields) {
        if (err) {
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }
        console.log("Query succesfully executed", rows);
        return rows;
    });
}


// Close the connection
connection.end(function () {
    // The connection has been closed
});