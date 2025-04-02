const { signup, login, signout } = require("../controller/auth.js")
const express = require("express")
const router = express.Router()


router.post("/signup", signup)
router.post("/logIn", login)
router.post("/signout", signout)


module.exports = router