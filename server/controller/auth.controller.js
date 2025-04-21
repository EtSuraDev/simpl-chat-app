const { user, dev } = require("../model/model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


const signup = async(req, res) => {
    try {

        // CHECK "userName" and "password" ARE NOT NULL OR UNDEFIND
        const { userName, password } = req.body

        if (!userName || !password) {
            res.status(400).json({
                msg: "provide all inputs",
                successes: false,
            })
            return
        }
        // CHECK IF USER EXIST
        const check_user = await user.findOne({
            where: { userName: userName }
        }).catch(err => console.log(err))
        console.log(check_user)
        if (check_user) {
            res.status(400).json({
                successes: false,
                msg: "user already existe"
            })
            return
        }


        // USER NOT EXIST IN DATABASE SO WE CAN HASH THE PASSWORD AND CREATE USER IN DATABASE
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, 10)


        await user.create({
            userName,
            password: hashPassword
        })

        // CREATE JWT 
        const token = jwt.sign({ userName }, process.env.SECRET_KEY, {
                expiresIn: "6h"
            })
            // SEND JWT USING COOKIE
        res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.DEPLOYD === "true",
                sameSite: process.env.DEPLOYED === "true" ? "None" : "Lax",
                maxAge: 6 * 60 * 60 * 1000
            })
            // ACCOUNT SUCCESSESFUL CREATED
        res.status(201).json({ successes: true, msg: "account successesful created" })
        return

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "server faild",
            successes: false
        })
    }
}


const login = async(req, res) => {
    try {
        const { userName, password } = req.body

        // CHECK IF "userName" AND "password" IS NOT NULL OR UNDIFIND
        if (!userName || !password) {
            res.status(400).json({
                successes: false,
                rmsg: "pleas provide all inputs"
            })
            return
        }

        // CHECK THE USER IS EXSIST
        const check_user = await user.findOne({
            where: { userName: userName }
        }).catch(err => console.log(err))
        if (!check_user) {
            res.status(404).json({ successes: false, msg: "user not exist " })
            return
        }



        // CHECK THE PASSWORD  IS CORRECT
        const check_password = await bcrypt.compare(password, check_user.password)
        if (!check_password) {
            res.status(400).json({ successes: false, msg: "incorrect password" })
            return
        }


        // CREATE JWT 
        const token = jwt.sign({ userName }, process.env.SECRET_KEY, {
                expiresIn: "6h"
            })
            // SEND JWT USING COOKIE
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.DEPLOYD == "true",
            sameSite: process.env.DEPLOYED === "true" ? "None" : "Lax",
            maxAge: 6 * 60 * 60 * 1000
        })


        res.status(200).json({ successes: true, msg: "successesful login" })
    } catch (error) {
        res.status(500).json({ successes: false, msg: "server faild" })
    }
}


const signout = async(req, res) => {
    try {

    } catch (error) {

    }
}



module.exports = {
    signup,
    login,
    signout
}