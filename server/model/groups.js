const sequelize = require("../config/connectDB.js")
const { DataTypes } = require("sequelize")


const groups = sequelize.define("groups", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // auto-generate UUID
        primaryKey: true,
        unique: true
    },
    groupName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    groupInfo: {
        type: DataTypes.STRING,
    }
})


const createGroups = [
    "Open Circle",
    "The Chat Room",
    "ConnectHub",
    "Vibe Space",
    "TalkZone",
    "Echo Chamber",
    "Global Lounge",
    "Random Relay"
]

const groupMessageTables = {};


createGroups.forEach((groupName) => {
    groupMessageTables[groupName] = sequelize.define(groupName, {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
    });
});




// Sync all models
sequelize.sync()
    .then(async() => {
        console.log("All tables created successfully");

        // Populate `groups` table if not already present
        for (const name of createGroups) {
            await groups.findOrCreate({
                where: { groupName: name },
                defaults: { groupInfo: `${name} info` }
            });
        }

    })
    .catch(err => console.error("Error syncing tables:", err));

module.exports = { groups, groupMessageTables }