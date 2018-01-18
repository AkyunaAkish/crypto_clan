require('dotenv').config();

const server = require('./init');
const io = require('socket.io')();

const fetchPricesInterval = require('./crypto_actions/fetchPricesInterval');

// when server starts, begin fetching crypto api data
// on an interval, passing in the socket io object
fetchPricesInterval(io);

io.on('connection', (socket) => {
    console.log('socket connected', new Date()); 
});

module.exports = io;