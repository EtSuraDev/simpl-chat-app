const sequelize = require("../config/connectDB.js")
const { DataTypes } = require("sequelize")



const users = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // auto-generate UUID
        primaryKey: true,
        unique: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: "image"
    }
})

sequelize.sync()
    .then(() => console.log("User table created successfully"))
    .catch(err => console.error("Error creating table:", err));

module.exports = users