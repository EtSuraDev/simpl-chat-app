const { groups } = require("../model/groups.js")
const users = require("../model/users.js")
const sequelize = require("../config/connectDB.js")
const { DataTypes } = require("sequelize")


const validateMsg = async(groupId, text, userName, replayTo) => {
    try {
        if (!groupId || !text || !userName) {
            console.log(userName)
            throw " groupId, text and userName  required "
        }
        const group = await groups.findOne({ where: { id: groupId } })
        const user = await users.findOne({ where: { id: userName } })
        if (!user) {
            console.log("erron")
            throw "not found"
        }
        const groupName = group.groupName
        const defineGroup = sequelize.define(groupName, {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4, // auto-generate UUID
                primaryKey: true,
                unique: true
            },
            message: {
                type: DataTypes.STRING,
                allowNull: false
            },
            sender: {
                type: DataTypes.UUID,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            replayTo: {
                type: DataTypes.STRING,
                allowNull: true
            }
        })

        await defineGroup.create({
            message: text,
            sender: userName,
            replayTo: replayTo || null
        });

        return user.userName
    } catch (error) {
        console.log(error)
        throw error
    }
}


module.exports = validateMsg