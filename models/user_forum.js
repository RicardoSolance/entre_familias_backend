const mongoose = require("../utils/dbMongo");


const usersForum = new mongoose.Schema({
    Topic: {
        type: String,
    },
    description: {
        type: String,
    },
    comments: [{
        answer:String,
        
    }
]});

const usersModel = mongoose.model("forum", usersForum);

module.exports = usersModel;