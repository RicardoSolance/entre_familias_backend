const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const user_routes = require("./routes/user_routes");

app.use("/api",user_routes);


app.get('/', (req, res) => {
    res.send('Estamos Dentro');
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});