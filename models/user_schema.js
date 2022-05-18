const mongoose = require("../utils/dbMongo");


const usersSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    }
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;