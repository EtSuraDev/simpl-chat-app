const user = require("../model/users")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


const signup = async(req, res) => {
    try {

        // STEP 1
        // CHECK "userName" and "password" ARE NOT NULL OR UNDEFIND
        console.log("hello")
        const { userName, password } = req.body
        console.log(req.body)

        if (!userName || !password) {
            res.status(400).json({
                msg: "provide all inputs",
                successes: false,
            })
            return
        }

        // STEP 2
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

        // STEP 3
        // USER NOT EXIST IN DATABASE SO WE CAN HASH THE PASSWORD AND CREATE USER TABLE IN DATABASE
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, 10)
        await user.create({
            userName,
            password: hashPassword
        })

        // STEP 4
        // CREATE JWT AND SEND JWT USING COOKIE
        const token = jwt.sign({ userName }, process.env.SECRET_KEY, {
            expiresIn: "6h"
        })
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.DEPLOYD === "true",
            sameSite: process.env.DEPLOYED === "true" ? "None" : "Lax",
            maxAge: 6 * 60 * 60 * 1000
        })

        // STEP 5
        // SEND SUCCESS MSG
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
        // STEP 1
        // CHECK IF "userName" AND "password" IS NOT NULL OR UNDIFIND
        const { userName, password } = req.body
        if (!userName || !password) {
            res.status(400).json({
                successes: false,
                rmsg: "pleas provide all inputs"
            })
            return
        }

        // STEP 2
        // CHECK THE USER IS EXSIST
        const check_user = await user.findOne({
            where: { userName: userName }
        }).catch(err => console.log(err))
        if (!check_user) {
            res.status(404).json({ successes: false, msg: "user not exist " })
            return
        }

        // SETP 3
        // CHECK THE PASSWORD  IS CORRECT
        const check_password = await bcrypt.compare(password, check_user.password)
        if (!check_password) {
            res.status(400).json({ successes: false, msg: "incorrect password" })
            return
        }

        // STEP 4
        // CREATE JWT AND SEND JWT USING COOKIE
        const token = jwt.sign({ userName }, process.env.SECRET_KEY, {
            expiresIn: "6h"
        })
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.DEPLOYD == "true",
            sameSite: process.env.DEPLOYED === "true" ? "None" : "Lax",
            maxAge: 6 * 60 * 60 * 1000
        })

        // STEP 5
        // SEND SUCCESS MSG
        res.status(200).json({ successes: true, msg: "successesful login" })
    } catch (error) {
        res.status(500).json({ successes: false, msg: "server faild" })
    }
}


const signout = async(req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.DEPLOYED === "true",
            sameSite: process.env.DEPLOYED === "true" ? "None" : "Lax",
        });

        res.status(200).json({ successes: true, msg: "Successfully signed out" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ successes: false, msg: "Signout failed" });
    }
}



module.exports = {
    signup,
    login,
    signout
}