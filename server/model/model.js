const sequelize = require("../config/connectDB.js")
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

const dev = sequelize.define("gourp_dev", {
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    replayTo: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})


user.hasMany(dev, { foreignKey: "userName", onDelete: "CASCADE", sourceKey: "userName" });
dev.belongsTo(user, { foreignKey: "userName" });

sequelize.sync()
    .then(() => console.log("User table created successfully"))
    .catch(err => console.error("Error creating table:", err));


module.exports = {
    user,
    dev
}