const { groups } = require("../model/groups")

const allGroups = async(req, res) => {
    try {
        const allGroups = await groups.findAll()
        console.log(allGroups)
        res.status(200).json({ success: true, data: allGroups })
    } catch (error) {
        console.log(error)
    }
}


module.exports = allGroups