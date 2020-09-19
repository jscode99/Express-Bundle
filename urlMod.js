var url=require('url');
var http=require('http');
var fs = require('fs');

http.createServer(function (req, res) {


    var q = url.parse(req.url,true);
    // console.log(q.pathname);

    if (q.pathname === "/") {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (q.pathname === "/about.html") {
        fs.readFile('about.html', function (err, data) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (q.pathname === "/contact.html") {
        fs.readFile('contact.html', function (err, data) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (q.pathname === "/signacc") {

        let a = q.query.numberOne;
        let b = q.query.numberTwo;
        let c = `first number is ${a} and second number is ${b}`
        res.write(c);
        res.end();
        }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write("error 404 page not found");
        res.end();
    }
}).listen(5000, () => {
    console.log("server started...");
});