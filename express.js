const express = require("express");

const path = require('path');


const app = express();

app.listen(2000, () => {
    console.log('Server Started...');
});


//middleware function......

app.use((req, res,next) => {
    console.log('start');
    next();
})

//serving html file.....

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
    console.log('processing....started');
    
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Getting signUp page');
   
});

//next is used to gave the permission to enter the next line of code processing=====

app.post('/signup', (req, res, next) => {
    res.send('Account created...')
    console.log('request submiting');
    next();
});

//end 

app.use((req, res) => {
    console.log('end');
})
