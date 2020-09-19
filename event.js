const events = require('events');
const util = require('util');

// let myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', (msg) => {
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'The event was emitted');


let Person = name => {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let sanith = new Person('sanith');
let remith = new Person('remith');

let people = [james, sanith, remith];

people.forEach(persons => {
    persons.on('speak', msg => {
        console.log(persons.name + ' said: ' + msg);
    });
});


sanith.emit('speak', 'hey due...');
