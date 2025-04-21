const { dev, user } = require("../model/model.js")


module.exports = async(req, res) => {
    try {
        const { userName } = req.user
        const userAccount = await user.findOne({ where: { userName } })
        if (!userAccount) {
            res.status(404).json({ success: false, msg: " user not exist " })
            return
        }
        const texts = await dev.findAll()
        res.status(200).json({ data: { texts, userAccount } })

    } catch (error) {
        res.status(500).json({ success: false, msg: "server faild" })
    }
}