var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var name1 = new Person('Name 1');
var name2 = new Person('Name 2');
var name3 = new Person('Name 3');
var people = [name1, name2, name3];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' Said: ' + msg);
    })
})

name1.emit('speak', 'Hi');
name2.emit('speak', 'Hello');