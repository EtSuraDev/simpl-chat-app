const sequelize = require("./connect.js")
const { DataTypes } = require("sequelize")



const user = sequelize.define("User", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
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

const msg = sequelize.define("msg", {
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})


user.hasMany(msg, { foreignKey: "userName", onDelete: "CASCADE", sourceKey: "userName" });
msg.belongsTo(user, { foreignKey: "userName" });

sequelize.sync()
    .then(() => console.log("User table created successfully"))
    .catch(err => console.error("Error creating table:", err));


module.exports = {
    user,
    msg
}