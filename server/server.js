const express = require("express")
const { Server } = require("socket.io")
const http = require("http")
const cors = require("cors")
const authRouter = require("./route/auth.route.js")
const cookieParser = require("cookie-parser")

// DATABASE CONNECTION
const connect_DB = require("./DB/connect.js")

// DATABASE TABLE
const user = require("./DB/model.js")

require("dotenv").config()


const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: process.env.FRONT_END, // Allow Next.js frontend
        methods: ["GET", "POST"]
    }
})
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONT_END,
    credentials: true
}))
app.use(express.json());
app.use("/auth", authRouter)



// io.on("connection", (socket) => {
//     console.log("user connected")
//     socket.on("message", (m) => {
//         console.log("Received message:", m);
//         io.emit("message", m);
//     })

//     socket.on("disconnect", () => {
//         console.log("A user disconnected");
//     });
// })







app.use("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})
server.listen(process.env.PORT || 8080, () => {
    console.log(`server listning on ${process.env.PORT}`)
})