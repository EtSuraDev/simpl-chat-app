const express = require("express")
const { Server } = require("socket.io")
const http = require("http")
const cors = require("cors")


const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Allow Next.js frontend
        methods: ["GET", "POST"]
    }
})

app.use(cors())


io.on("connection", (socket) => {
    console.log("user connected")
    socket.on("message", (m) => {
        console.log("Received message:", m);
        io.emit("message", m);
    })

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
})


server.listen(8080, () => {
    console.log("server")
})