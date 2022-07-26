require('dotenv').config();
const express = require("express");

const Port = 8000;

const db = require('./config/mongoose');

const app = express();

// use express router
app.use('/', require('./routes/index'));

app.listen(Port, function(err){
    if(err){
    console.log("error in running the server");
    }
    console.log("server is running on port", `${Port}`);
});