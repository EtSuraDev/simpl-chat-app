const express = require("express")
const route = express.Router()
const auth = require("../middlewares/auth.middlewares.js")
const getUserData = require("../controller/getUserData.controller.js")

route.get("/", auth, getUserData)

module.exports = route