const jwt = require("jsonwebtoken")
const users = require("../model/users")

module.exports = async(req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            res.status(400).json({ succses: false, msg: " not authorize " })
            return
        }
        const { userName } = jwt.verify(token, process.env.SECRET_KEY)
        const user = await users.findOne({ where: { userName } });

        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }

        req.user = {
            userName,
            userId: user.id, // ✅ Just the ID
        };
        console.log(userName)
        next()
    } catch (error) {
        res.status(500).json({ success: false, msg: "server faild" })
        console.log(error)
    }
}