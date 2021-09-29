var express = require('express');
var app = express();
require('dotenv').config();


//app.get("/", (req, res) => {
//res.send("Hello Express");
//})

abosultePath = __dirname + "/views/index.html";

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(abosultePath);
})

app.get("/json", (req, res) => {
    let message = "Hello World";
    let response = "";
    if(process.env.MESSAGE_STYLE === "uppercase") {
        response = message.toUpperCase();
    }
    res.json({
        "message": response
    })
})



































module.exports = app;
