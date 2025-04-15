module.exports = async(req, res) => {
    try {
        res.send("alldata")
    } catch (error) {
        res.status(500).json({ success: false, msg: "server faild" })
    }
}