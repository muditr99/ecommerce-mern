require('dotenv').config();
const express = require("express");

const Port = 8000;

const db = require('./config/mongoose');
const userRoute = require('./routes/index');

const app = express();

// middlewares
app.use(express.json());
app.use('/', userRoute);

app.listen(Port, function(err){
    if(err){
    console.log("error in running the server");
    }
    console.log("server is running on port", `${Port}`);
});