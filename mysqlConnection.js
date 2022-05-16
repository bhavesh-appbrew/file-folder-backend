var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'nados-dev.cgc0jj0skptl.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: 'bhavesh1997',
    port: 3306,
    database: 'nados',
});

con.connect(function (err) {
    if (err) console.log(err);
    console.log('Connected!');
});

module.exports = con;
