const express = require("express")
const route = express.Router()
const getGroupMsg = require("../controller/getGroupMsg.controller.js")
const auth = require("../middlewares/auth.middlewares.js")



route.get("/:group_id", getGroupMsg)


module.exports = route