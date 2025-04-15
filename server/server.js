const express = require("express")
const { Server } = require("socket.io")
const http = require("http")
const cors = require("cors")
const authRouter = require("./route/auth.route.js")
const cookieParser = require("cookie-parser")
const getMsg = require("./route/getMsg.route.js")

// DATABASE CONNECTION
const connect_DB = require("./config/connectDB.js")

// DATABASE TABLE
const { user } = require("./model/model.js")

require("dotenv").config()


const app = express()
const server = http.createServer(app)

app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONT_END,
    credentials: true
}))
app.use(express.json());
app.use("/auth", authRouter)
app.use("/", getMsg)












app.use("*", (req, res) => {
    res.status(404).json({ success: false, msg: "NOT FOUND" })
})
server.listen(process.env.PORT || 8080, () => {
    console.log(`server listning on ${process.env.PORT}`)
})


const socket = require("./config/socet.io.js")
socket(server)
module.exports = { app, server }