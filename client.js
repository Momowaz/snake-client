const net = require('net');
const {IP, PORT } = require('./constants');

const connect = () => {
    const conn = net.createConnection({
    host: IP, // change to IP address of computer, more on that below
    port: PORT,
});

//Print a message to the screen when the connection is successfully established.
// conn.on('connect', () => {
//     console.log('Successfully connected to game server');
// });

//Send a name MHB to the server
conn.on('connect', () => {
    // console.log('Successfully connected to game server');
    conn.write('Name: MHB');
});

// conn.on('connect', () => {
//     conn.write('Move: up');
// });

// Recieve data from server
// conn.on('data', (data) => {
//     console.log(data);
// })

conn.setEncoding('utf8');
return conn;
}

// exporting the connect function
module.exports = { connect };