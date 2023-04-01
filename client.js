const net = require('net');

const connect = () => {
    const conn = net.createConnection({
    host: 'localhost', // change to IP address of computer, more on that below
    port: 50541,
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