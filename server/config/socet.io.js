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
        socket.on("message", (m) => {
            saveMsg(m, socket)
            console.log("Received message:", m);
            io.emit("message", m);
        })

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    })

}


module.exports = setupSocet