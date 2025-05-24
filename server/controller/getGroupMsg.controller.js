const sequelize = require("../config/connectDB.js")
const { groups } = require("../model/groups.js")
const users = require("../model/users.js")

module.exports = async(req, res) => {
    try {
        const { group_id } = req.params
        if (!group_id) {
            return res.status(400).json({ success: false, msg: " group id not found  " })
        }
        const group = await groups.findOne({ where: { id: group_id } })
        if (!group) {
            return res.status(404).json({ success: false, msg: " group not found " })
        }
        const [msgs] = await sequelize.query(
            `SELECT * FROM \`${group.groupName}s\` ORDER BY createdAt ASC`
        );
        const updateMsgs = await Promise.all(
            msgs.map(async(item) => {
                let { userName } = await users.findOne({ where: { id: item.sender } });
                return {...item, sender: userName };
            })
        );
        console.log(updateMsgs)
        return res.status(200).json({ success: true, data: { group, msgs: updateMsgs } })
    } catch (error) {
        res.status(500).json({ success: false, msg: "server tt faild" })
        console.log(error)
    }
}