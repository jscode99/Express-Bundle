const fs = require('fs');
const http = require('http');


let server = http.createServer((req, res) => {
    console.log(`Request was made on ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    let myReadStream = fs.createReadStream(__dirname + '/text.txt', 'utf-8');
    
    //send data to client as response
    
    myReadStream.pipe(res);

 
});

server.listen(9000,`127.0.0.1`);
console.log(`Listening on port 9000`);
