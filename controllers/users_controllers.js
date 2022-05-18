const user_model = require("../models/user_model");

const getAllUsers = async(req,res) =>{
    try {
        const response = await user_model.getAllUsers();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const obj = {
    getAllUsers
}

module.exports = obj;