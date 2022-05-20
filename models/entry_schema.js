const mongoose = require('../utils/dbMongo');


const entrySchema = new mongoose.Schema({
    author: {
        // type: mongoose.Schema.Types.ObjectId, ref: users,
        type : String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    category: {
        type : String,
    }
    
});

const usersModel = mongoose.model("entries", entrySchema);

module.exports = usersModel;