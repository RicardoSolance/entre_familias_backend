const mongoose = require("../utils/dbMongo");


const usersSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String, 
    },
    gender: {
        type: String,
    },
    birthday: {
        type: String,
    },
    zipcode: {
        type: String,
    },
    famillyName: {
        type: String,
    },
    famillyType: {
        type: String,
    },
    hostType: {
        type: String,
    },
    fosterTime: {
        type : String,
    },
    biologicalChildren: {
        type : String,
    },
    fosterChildren: {
        type : String,
    },
    parentsData: [
        
        {
            type: String,
            
        },
        {
            type: String,
            
        },
        {
            type: String,
            
        },
                
    
    ]
   
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;