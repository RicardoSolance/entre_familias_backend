const user_schema = require("./user_schema");

const getAllUsers = async()=>{
    try {
        const getAll = await user_schema.find({});
     
        return getAll;        
    } catch (error) {
        console.log(error);
    }
}

const signUpUser = async (birthday, hashPassword, email)=>{
    const password = hashPassword;
    const user = {birthday, password, email}
    try {
        const newUser = new user_schema(user);
        
        await user_schema.create(newUser);
    } catch (error) {
        console.log(error);
    }
}   

const updateUser = async (user) => {
    
    
    const name = user.nameParams;
    const filter = { name:user.nameParams };
    const update = user;
    console.log('user model', update);

  
    try {
        const newUser = user_schema(user);
        const oldUser = await user_schema.findOneAndUpdate(filter,update);
        // Object.assign(oldUser, user);
        // oldUser.save();
        // console.log('oldUser', user.name);
        // oldUser.overwrite(newUser);
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
const getUser = async (email) => {
    try {
        const user = await user_schema.findOne({ email: email });
        console.log('este es el user que me trae', user);
        return user;        
        
    } catch (error) {
        console.log(error);
    }
}

const obj = {
    getAllUsers,
    signUpUser,
    updateUser,
    deleteUser,
    getUser
}

module.exports = obj;