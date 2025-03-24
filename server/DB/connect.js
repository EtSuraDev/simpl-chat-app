const mysql = require("mysql")


const pool = mysql.createPool({
    host: "localhost",
    password: "",
    database: "chat_app",
    user: "root"
})


pool.getConnection((err) => {
    if (err) throw err
    console.log("Database is connect")
})


module.exports = pool