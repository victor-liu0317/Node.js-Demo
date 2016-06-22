var event = require('events');
var EventEmitter = new event.EventEmitter();

EventEmitter.on('connection', function(args1, args2) {
	console.log('listener1', args1, args2);
});
EventEmitter.on('connection', function(args1, args2) {
	console.log('listener2', args1, args2);
});

EventEmitter.emit('connection','hello','world');
