const entry_model = require('../models/entry_model');

const getAllEntries = async (req, res) => {

    try {
        const response = await entry_model.getAllEntries();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}




const obj = {
  
    getAllEntries
}

module.exports = obj;