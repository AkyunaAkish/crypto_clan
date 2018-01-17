const fetchCoinCap = require('./fetchCoinCap');
const fetchPoloniex = require('./fetchPoloniex');
const fetchKraken = require('./fetchKraken');

module.exports = (pair, exchangeName) => {
    switch (exchangeName) {
        case 'coinCap':
          return fetchCoinCap(pair);
        break;

        case 'poloniex':
          return fetchPoloniex();
        break;

        case 'kraken':
            return fetchKraken(pair);
        break;
    }
};