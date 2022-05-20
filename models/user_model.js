const user_schema = require("./user_schema");

const getAllUsers = async()=>{
    try {
        const getAll = await user_schema.find({});
        console.log('entra en ', getAll);
        return getAll;        
    } catch (error) {
        console.log(error);
    }
}

const signUpUser = async (name, surnames, gender, birthday, telephone, hashPassword, email)=>{
    const password = hashPassword;
    const user = {name, surnames, gender, birthday, telephone, password, email}
    try {
        const newUser = new user_schema(user);
        
        await user_schema.create(newUser);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async(user) =>{
    try {
        const newUser = user_schema(user.body);
        const oldUser = await user_schema.findOne({ name: user.name});
        oldUser.overwrite(newUser);
        await oldUser.save();
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async(email) =>{
    try {
        await user_schema.deleteOne({email: email});
    } catch (error) {
        console.log(error);
    }
}

const obj = {
    getAllUsers,
    signUpUser,
    updateUser,
    deleteUser,
}

module.exports = obj;