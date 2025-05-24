const express = require("express")
const getAllGroup = require("../controller/getAllGroups.controller")
const route = express.Router()


route.get("/all", getAllGroup)


module.exports = route