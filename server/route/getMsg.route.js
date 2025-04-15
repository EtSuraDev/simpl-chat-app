const express = require("express")
const route = express.Router()
const getMsg = require("../controller/getMsg.controller.js")
const auth = require("../middlewares/auth.middlewares.js")



route.get("/", auth, getMsg)


module.exports = route