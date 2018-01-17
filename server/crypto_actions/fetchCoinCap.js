const axios = require('axios');

module.exports = (symbol) => axios.get(`https://api.coinmarketcap.com/v1/ticker/${symbol}/`);
