const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const user_routes = require("./routes/user_routes");
const cors = require("cors");
const cookieParser=require("cookie-parser")
const path = require("path");
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cookieParser())
app.use(express.urlencoded({extended:true}));//Estas dos son para los métodos put y post, para que el servidor pueda leer la información nueva que le mandamos
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    "Access-Control-Allow-Origin":"http://localhost:3000"
}));



app.use("/api",user_routes);

app.get('/', (req, res) => {
    res.send('Estamos Dentro');
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});