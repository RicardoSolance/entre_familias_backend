const user_schema = require("./user_schema");

const getAllUsers = async()=>{
    try {
        const getAll = await user_schema.find({},"-_id");
        return getAll;        
    } catch (error) {
        console.log(error);
    }
}

const obj = {
    getAllUsers
}

module.exports = obj;