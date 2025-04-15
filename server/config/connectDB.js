const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("chat_app", "root", "", {
    dialect: "mysql",
    dialectOptions: {
        charset: 'utf8mb4',
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
    }
})



sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error connecting to the database:', err));


module.exports = sequelize