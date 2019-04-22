
const route = require("./route");

console.log(route.hello);

console.log(route.printlog(route.hello + "suresh"))

const  http = require('http');

http.createServer(function (req,res) {
    if(req.url == '/') {
        res.writeHead(200,{'Content-type':'text/plain'});
        res.end("Shree Ganesh");
    }
}).listen(1222);

