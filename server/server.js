const express = require("express")
const { Server } = require("socket.io")
const http = require("http")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const groupMsg = require("./controller/msg.js")

// DATABASE CONNECTION
const connect_DB = require("./config/connectDB.js")

// DATABASE TABLE

require("dotenv").config()


const app = express()
const server = http.createServer(app)


const createSocket = require("./config/socet.io.js")
const io = createSocket(server)
groupMsg(io)

app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONT_END,
    credentials: true
}))
app.use(express.json());


//  ALL ROUTES

const getGroupMsgRoute = require("./route/getGrouopMsg.route.js")
const authRoute = require("./route/auth.route.js")
const getUserDataRoute = require("./route/getUserData.route.js")
const getAllGroupRoute = require("./route/getAllGroup.route.js")

app.use("/auth", authRoute)
app.use("/group", getAllGroupRoute)
app.use("/group", getGroupMsgRoute)
app.use("/", getUserDataRoute)












app.use("*", (req, res) => {
    res.status(404).json({ success: false, msg: "NOT FOUND" })
})
server.listen(process.env.PORT || 8080, () => {
    console.log(`server listning on ${process.env.PORT}`)
})

module.exports = { app, server }