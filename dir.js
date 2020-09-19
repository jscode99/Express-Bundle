const fs = require('fs');

// fs.writeFile('text.txt', 'Hello im jishnu', (err) => {
//     if (err) {
//         console.log('OOps');
//     }
// });

fs.mkdir('stuff', () => {
    fs.readFile('text.txt', 'utf-8', (errors, data) => {

        if (errors) {
            console.log('Error Occured...');
        } else {
            fs.writeFile('./stuff/writeMe.txt', data, (erro) => {
                if (erro) {
                    console.log('Oops....');
                } else {
                    console.log('Access Granted....');
                }
            })
        };
    });
});


//to remove the directory========


// fs.unlink('./stuff/writeMe.txt', () => {
//     fs.rmdir('stuff');
// });
