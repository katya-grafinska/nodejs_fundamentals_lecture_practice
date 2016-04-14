var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

//will call this
server.on('request', function(obj) {
    console.log('request from: ', obj.from)
})

//than that
server.on('request', function(obj) {
    console.log('2nd jandler request from: ', obj.from)
})

// server.on('error', function(err) {
//     console.error(err)
// })

server.emit('request', {from: 'me'});
server.emit('request', {from: 'another me'});

// server.emit('error', new Error());
