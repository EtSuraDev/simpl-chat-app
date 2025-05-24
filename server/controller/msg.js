const validateMsg = require("../config/msg.js")


const groupMsg = async(io) => {
    try {
        io.on("connect", (socket) => {
            console.log("user connected")
            socket.on("groups_connection", async({ groupId }) => {
                console.log(groupId)
                groupId.forEach(item => {
                    socket.join(`group_${item}`)
                    console.log(item)
                });

            })


            socket.on("msg", async({ groupId, text, userName, replayTo, id }) => {
                try {
                    console.log(groupId, text, "hello")
                    const roomName = `group_${groupId}`;
                    let name = await validateMsg(groupId, text, userName, replayTo)
                    console.log("hello")
                    io.to(roomName).emit("receive_message", {
                        groupId,
                        text,
                        name,
                        createdAt: new Date().toISOString(),
                        id
                    })
                } catch (error) {
                    socket.disconnect()
                    console.log(error)
                }
            })

        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = groupMsg