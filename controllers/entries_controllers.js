const entry_model = require('../models/entry_model');

const getAllEntries = async (req, res) => {

    try {
        const response = await entry_model.getAllEntries();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}
const createEntry = async (req, res) => {
    try {
        const entry = req.body;
        await entry_model.createEntry(entry);
        res.status(201).json({"messsage": "Blog send to model"})
    } catch (error) {
        console.log(error);
    }
}




const obj = {
  
    getAllEntries,
    createEntry
}

module.exports = obj;