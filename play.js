// importing connect function from client.js file
const { connect } = require('./client');
const { setupInput } = require('./input');


console.log('Connecting...');
connect();
setupInput();