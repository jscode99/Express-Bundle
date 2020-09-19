const fs = require('fs');


//Readable date.......


let myReadStream = fs.createReadStream(__dirname + '/text.txt', 'utf-8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', chunk => {
    console.log('new chunk recieved');

//Writable data.....
    myWriteStream.write(chunk);

   
});


