const mongoose = require("../utils/dbMongo");
const User = require("./user_schema");

const usersForum = new mongoose.Schema({
    Topic: {
        type: String,
    },
    description: {
        type: String,
    },
    time : { type : Date, default: Date.now },
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: User, required:true},
    comments: [{
        answer:String,
        time : { type : Date, default: Date.now },
        commentBy: {type: mongoose.Schema.Types.ObjectId, ref: User, required:true},
    }
    
]});

const usersModel = mongoose.model("forum", usersForum);

module.exports = usersModel;