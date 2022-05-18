const user_model = require("../models/user_model");

const getAllUsers = async(req,res) =>{
    try {
        const response = await user_model.getAllUsers();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const signUpUser = async(req,res)=>{
    try {
        await user_model.signUpUser(req.body);
        res.status(200).json("User created succedfully");
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async(req,res) =>{
    try {
        const userBody = {
            name: req.params.name,
            body: req.body
        }
        await user_model.updateUser(userBody);
        res.status(200).json("User updated");
    } catch (error) {
        res.status(400).json({message: "an error ocurred"})
    }
}

const deleteUser = async(req,res)=>{
    try {
        await user_model.deleteUser(req.params.email);
        res.status(200).json("User deleted");
    } catch (error) {
        res.status(400).json({message: "an error ocurred"})
    }
}

const obj = {
    getAllUsers,
    signUpUser,
    updateUser,
    deleteUser
}

module.exports = obj;