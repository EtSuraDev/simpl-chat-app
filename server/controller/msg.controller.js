const { dev, user } = require("../model/model.js")

module.exports = async(data, socket) => {
    try {
        const { userName, text } = data
        if (!userName || !text) {
            console.log("userName and text are undifind ")
            socket.disconnect()
            return
        }
        const findUser = await user.findOne({ where: { userName: userName } })
        if (!findUser) {
            console.log("user not found")
            socket.disconnect()
            return
        }
        dev.create({
            text: text,
            userName: userName,
            replayTo: null
        })
    } catch (error) {
        console.log(`error no message ${error} `)
        socket.disconnect()
    }
}