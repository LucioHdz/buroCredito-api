const mysql = require('mysql');
const CONFIGS = require('../configs/database'); 


const connection = mysql.createConnection({
    user: CONFIGS.USER,
    password: CONFIGS.PASS,
    host: CONFIGS.HOST,
    database: CONFIGS.DATABASE,
})


connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection