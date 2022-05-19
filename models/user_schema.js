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
    profesion: {
        type: String,
    },
    salary_range: {
        type: Number,
    },
    rented_mortage: {
        type: String,
    },
    number_of_bedrooms: {
        type: Number,
        integer: true
    },
    all_members_accept: {
        type : Boolean,
    },
    flexibility: {
        type : Boolean,
    }
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;