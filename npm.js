var slug = require('slug');
var http = require("http");


http.createServer(function (req,res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end("<h1>Hello jishnu</h1>")
}).listen(4000)




console.log(slug("hi how are you"));

console.log(slug('i ♥ unicode', '_'));

console.log(slug("hello different things"));


