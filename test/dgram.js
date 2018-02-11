let dgram = require('dgram');

let server = dgram.createSocket('udp6');

server.on('message', (data) => {
    console.log('server: ' + data);
})

server.bind(3000)

let client = dgram.createSocket('udp6')

client.send(Buffer.from('some words'), 3000, 'localhost', err => {
    if (err) throw err;
})