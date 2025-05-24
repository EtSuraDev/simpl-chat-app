const { Sequelize } = require("sequelize")
require('dotenv').config();

// const sequelize = new Sequelize("chat_app", "root", "", {
//     dialect: "mysql",
//     dialectOptions: {
//         charset: 'utf8mb4',
//     },
//     define: {
//         charset: 'utf8mb4',
//         collate: 'utf8mb4_unicode_ci',
//     }
// })
// const sequelize = new Sequelize((process.env.DEPLOYD ? process.env.DB_NAME : "chat_app"), (process.env.DEPLOYD ? process.env.DB_USER : "root"), (process.env.DEPLOYD ? process.env.DB_PASS : ""), {
//     host: process.env.DEPLOYD ? process.env.DB_HOST : "localhost",
//     dialect: "mysql",
//     port: 3306,
//     dialectOptions: {
//         charset: 'utf8mb4',
//     },
//     define: {
//         charset: 'utf8mb4',
//         collate: 'utf8mb4_unicode_ci',
//     },
// });


console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, process.env.DB_HOST);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        dialectOptions: {
            charset: "utf8mb4",
        },
        define: {
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci",
        },
        logging: false,
    }
);


sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error connecting to the database:', err));


module.exports = sequelize