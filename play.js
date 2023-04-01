// importing connect function from client.js file
const { connect } = require('./client');
const { setupInput } = require('./input');


console.log('Connecting to server...');
const conn = connect();
console.log('Connection established');
setupInput(conn);