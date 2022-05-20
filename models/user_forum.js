const mongoose = require("../utils/dbMongo");
const User = require("./user_schema");

const usersForum = new mongoose.Schema({
    Topic: {
        type: String,
    },
    description: {
        type: String,
    },
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: User},
    comments: [{
        answer:String,
        
    }
    
]});

const usersModel = mongoose.model("forum", usersForum);

module.exports = usersModel;