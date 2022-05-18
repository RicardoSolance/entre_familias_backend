const mongoose = require("mongoose");
const url = `mongodb+srv://reto_tripulaciones:reto_tripulaciones@cluster0.iygvv.mongodb.net/?retryWrites=true&w=majority`;


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true
}

mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

module.exports = mongoose;