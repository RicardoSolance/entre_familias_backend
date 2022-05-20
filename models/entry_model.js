const entry_schema = require('./entry_schema');

const getAllEntries = async()=>{
    try {
        const entries = await entry_schema.find({}, "-_id");
        console.log('estos son todas las entries', entries);
        return entries;        
    } catch (error) {
        console.log(error);
    }
}

const obj = {
    getAllEntries
}

module.exports = obj;