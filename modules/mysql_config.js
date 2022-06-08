require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'bdac6e246e162a',
    password:'292f8528',
    database:'heroku_272d7b5a2e7b87f',
    connectionLimit:10,
    waitForConnections:true,
    dateStrings: true
})

module.exports = pool.promise();