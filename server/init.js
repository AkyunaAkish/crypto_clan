require('dotenv').config();

const app = require('./server.js');
const debug = require('debug')('cryptocrew:server');
const http = require('http');

// mongoose config
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useMongoClient: true
});

// tells mongoose to use the ES6 promise implementation
mongoose.Promise = global.Promise; 

const io = require('./io');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

let listener = server.listen(port);
io.attach(listener); // attaches socket.io config file to server socket events

server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}