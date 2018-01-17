require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helpers = require('../helpers');
const dev = process.env.NODE_ENV === 'development';

const coins = require('./routes/coins/coins');
const members = require('./routes/members/members');

const server = express();

server.use(cors());
server.use(logger('dev'));
server.use(compression());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: false
}));

server.use(express.static(dev ? helpers.root('client') : helpers.root('dist')));
server.use(cookieParser());

server.use('/api/coins', coins);
server.use('/api/members', members);

server.all('*', (req, res, next) => {
    res.sendFile('index.html', {
        root: dev ? helpers.root('client') : helpers.root('dist')
    });
});

module.exports = server;