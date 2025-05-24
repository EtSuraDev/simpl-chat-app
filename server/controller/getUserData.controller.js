const users = require("../model/users.js")
const { groups } = require("../model/groups.js")


const getUserData = async(req, res) => {
    try {
        const { userId } = req.user
        if (!userId) {
            return res.status(400).json({ msg: "pleas send userId", success: false })
        }
        const user = await users.findOne({ where: { id: userId } })
        if (!user) {
            return res.status(404).json({ msg: "user not found", success: false })
        }
        const userData = {
            userName: user.userName,
            userId: user.id,
            image: user.image
        }

        const groupsData = await groups.findAll()

        res.status(200).json({ success: true, msg: "send", data: userData, groups: groupsData })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: "something wrong" })
    }
}


module.exports = getUserData