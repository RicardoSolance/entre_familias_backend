const entry_schema = require('./entry_schema');

const getAllEntries = async()=>{
    try {
        const entries = await entry_schema.find({}, "-_id");
        // console.log('estos son todas las entries', entries);
        return entries;        
    } catch (error) {
        console.log(error);
    }
}

const createEntry = async (entry) => {
    try {
        let data = await entry_schema.create(entry);
        res.status(200)
    } catch (error) {
        
    }
}

const obj = {
    getAllEntries,
    createEntry
}

module.exports = obj;