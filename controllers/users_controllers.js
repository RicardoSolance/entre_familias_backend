const user_model = require("../models/user_model");
const bcrypt = require("bcrypt");
const regex = require("../utils/regex");

const getAllUsers = async(req,res) =>{
    try {
        const response = await user_model.getAllUsers();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

const signUpUser = async(req,res)=>{ 
    const {birthday, email, gender, name, pass1, pass2, surnames, telephone} = req.body;
    if (req.body) {
        if (regex.validateEmail(email)) {
            if (regex.validatePassword(pass1)) {
                    if (pass1===pass2) {
                        const hashPassword = await bcrypt.hash(pass1, 10);
                            try {
                                await user_model.signUpUser(name, surnames, gender, birthday, telephone, hashPassword, email);
                                res.status(200).json("User created succesfully");
                            } catch (error) {
                                res.status(400).json({ message: error });
                            }       
                    } else{
                        res.status(403).json('Passwords dont match');
                    }           
                } else{
                    res.status(403).json("Password too weak");
                }
        } else {
            res.status(403).json("Email too weak");
        } 
    } else {
        res.status(400).json('Data not provided' );
    }       
}

const loginUser = async(req,res)=>{
    const email = req.body.email;
    const password = req.body.pass1;
    console.log(email,password);
    try {
        const users = await user_model.getAllUsers();
        const user = users.find(u => { return u.email === email });
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                // const payload = {
                //     email: user.email,
                //     check: true
                // };
                // const token = jwt.sign(payload, config.key, {
                //     expiresIn: "20s"
                // });
                res
                // .cookie("access-token", token, {
                //     httpOnly: true,
                //     sameSite: "strict",
                // })
                .status(200).json({message:"Correct credentials"});
            } else{
                res.json("pass doesnt match")
            }
        } else {
            res.json("user not found");            
        }
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
    deleteUser,
    loginUser
}

module.exports = obj;