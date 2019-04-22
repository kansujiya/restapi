var hello = "hello suresh";

function printlog(msg) {
    console.log(msg)
}

module.exports.hello = hello;
module.exports.printlog = printlog;

const express = require('express');
var bodyparser = require('body-parser');
var app = express()
var router = express.Router();

app.use(bodyparser.urlencoded({extended: false}));
app.use(router);

router.get('/',function (req,res) {
    res.send("Hi...This is home page")
});

router.get('/about',function (req, res) {
    res.send("this is about page")
});

router.get('/hello/:name',function (req,res) {
    res.send('Hello' + req.params.name + '!')
});

router.get('/username',function (req,res) {
    var htmlContent = '<html><head><title>Uploading</title>></head>><body><form action="/username" method="POST">' +
        'Username: <input type="text" name="username"><br><input type="submit" value="submit"></form>></body>></html>>';
    res.send(htmlContent)
});

router.post('/username',function (req,res) {
    res.send('IN the POST method of /username' + req.body.username + '!');
});

app.listen(1222);
console.log("server is running on 1222");