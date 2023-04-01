const net = require('net');

const connect = () => {
    const conn = net.createConnection({
    host: 'localhost', // change to IP address of computer, more on that below
    port: 50541,
});

//Print a message to the screen when the connection is successfully established.
conn.on('connect', () => {
    console.log('Successfully connected to game server');
});

conn.on('connect', () => {
    conn.write('Name: MHB');
});

// Recieve data from server
conn.on('data', (data) => {
    console.log(data);
})

conn.setEncoding('utf8');
return conn;
}

// exporting the connect function
module.exports = { connect };