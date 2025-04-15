const user = require("../model/model.js")
const jwt = require("jsonwebtoken")

module.exports = async(req, res, next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            res.status(400).json({ succses: false, msg: " not authorize " })
            return
        }
        const userName = jwt.verify(token, process.env.SECRET_KEY)
        req.user = userName
        next()
    } catch (error) {
        res.status(500).json({ success: false, msg: "server faild" })
    }
}