var events = require('events');
var util = require('util');
var myCustomEvent = new events.EventEmitter();

myCustomEvent.on('someEvent', function(msg) {
    console.log(msg);
});
myCustomEvent.emit('someEvent','Custom message');
