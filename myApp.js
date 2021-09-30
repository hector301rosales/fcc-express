var express = require('express');
var app = express();
require('dotenv').config();


//app.get("/", (req, res) => {
//res.send("Hello Express");
//})

abosultePath = __dirname + "/views/index.html";

app.use(function(req, res, next) {
    console.log(req.method, req.path, " - ", req.ip);
    next();
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(abosultePath);
});

app.get("/json", (req, res) => {
    let message = "Hello json";
    let response = "";
    if(process.env.MESSAGE_STYLE === "uppercase") {
        response = message.toUpperCase();
    } else {
        response = message;
    }
    res.json({
"message": response
    })
});

//Chain middleware
app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({
        "time": req.time
    })
});

app.get("/:word/echo", (req, res) => {
    res.json({
        "echo": req.params.word
    })
});

app.get("/name", (req, res) => {
    res.json({
        "name": req.query.first + " " + req.query.last
    })
})

module.exports = app;
