const net = require('net');
const {IP, PORT } = require('./constants');

const connect = () => {
    const conn = net.createConnection({
    host: IP, // change to IP address of computer, more on that below
    port: PORT,
});

conn.setEncoding('utf8');
return conn;
}

// exporting the connect function
module.exports = { connect };