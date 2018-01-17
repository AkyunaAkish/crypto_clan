require('dotenv').config();

const KrakenClient = require('kraken-exchange-api');
const kraken = new KrakenClient(process.env.KRAKEN_API_KEY, process.env.KRAKEN_PRIVATE_KEY);

module.exports = (pair) => {
    return new Promise((resolve, reject) => {
        // fetches current ticker data from Kraken for a given pair
        kraken.api('Ticker', {
            'pair': pair
        }, (error, data) => {
            if (error) {
                reject(error);
            } else if(data && data.result) {
                resolve(data.result);
            }
        });
    });
};