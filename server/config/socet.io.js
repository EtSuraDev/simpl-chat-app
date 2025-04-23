const { Server } = require("socket.io")
const saveMsg = require("../controller/msg.controller")

function setupSocet(server) {

    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })


    io.on("connection", (socket) => {
        console.log("user connected")
        socket.on("message", async(m) => {
            saveMsg(m, socket)
            io.emit("message", {...m, createdAt: new Date().toISOString() });
        })

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    })

}


module.exports = setupSocet