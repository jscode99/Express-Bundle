var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    fs.readFile('index.html',function (err,data) {
        if (err) {
          console.log('Error 404');
        } else {
            res.writeHead(200, { 'content-type': 'text/html' }) //**** Standard protocol for request and response *****
            res.write(data);
            res.end();
        }
    })
    
}).listen(7000)