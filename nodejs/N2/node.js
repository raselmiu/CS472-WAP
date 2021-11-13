var http = require('http');
var myMod = require('./myModule');
http.createServer(function (req, res) {
    res.writeHead(200,
        { 'Content-Type': 'text/html' });
    res.write("Current Date & Time: " + myMod.myDate());
    res.end();
}).listen(8181);