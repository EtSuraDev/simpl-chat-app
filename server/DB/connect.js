const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("chat_app", "root", "", {
    dialect: "mysql"
})



sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error connecting to the database:', err));


module.exports = sequelize