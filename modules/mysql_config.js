require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    // host:'us-cdbr-east-05.cleardb.net',
    // user:'bb846d709d3792',
    // password:'3bc574b6',
    // database:'heroku_733e1f02961bde7',
    host:'localhost',
    user:'root',
    password:'12250710',
    database:'team3',
    connectionLimit:10,
    waitForConnections:true,
    dateStrings: true
})

module.exports = pool.promise();