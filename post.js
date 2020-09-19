const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.listen(4000, () => {
    console.log('server started....');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send(req.query));

let profiles = {
    "1": { "name": "Jishnu", "Age": 21 },
    "2": { "name": "Kichumma", "Age": 20 },
    "3": { "name": "Lechu", "Age": 26 }
    
};

app.get('/profile/:id', (req, res) => {
    let current_id = req.params.id;
    let current_profile = profiles[current_id];
    res.send(current_profile.name);
    
})

// app.get('/profile/:id/:id1', (req, res) => res.send(req.params.id +" " + req.params.id1));  ====  More than one params  ====

app.post('/login', (req, res) => res.send(req.body.hobby));

