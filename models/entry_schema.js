const mongoose = require('../utils/dbMongo');


const entrySchema = new mongoose.Schema({
    id: {
        type: Number,
        default:0
    },
    author: {
        // type: mongoose.Schema.Types.ObjectId, ref: users,
        type : String,
    },
    image: {
        type: String,
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