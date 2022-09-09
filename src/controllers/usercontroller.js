const userModel = require("../models/userModel")


const createUser = async function (req, res) {
    try {
        let user = req.body

        if (!user.username) { return res.status(400).send({ status: false, message: "name is required" }) }

        if (!user.Password) { return res.status(400).send({ status: false, message: "Password is required" }) }

        if (!user.age) { return res.status(400).send({ status: false, message: "age is required" }) }
        
        if(user.age<18)  { return res.status(400).send({ status: false, message: "age should be greater than 18" }) }
        
        
        let userCreated = await userModel.create(user)
        res.status(201).send({ status: true, data: userCreated })
    }
catch (err) { return res.status(500).send({ status: false, msg: err.message }) 
}}


module.exports.createUser= createUser
