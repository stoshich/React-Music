const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'StoSte170499',
    database: 'auth_roles'
}).promise()

module.exports = connection