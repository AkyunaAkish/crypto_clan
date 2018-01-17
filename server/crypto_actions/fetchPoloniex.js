const Poloniex = require('poloniex.js');
const poloniex = new Poloniex();

module.exports = () => {
    return new Promise((resolve, reject) => {
        // returns ticker data for all coins on poloniex
        poloniex.returnTicker((err, data) => {
            if (err) {
                reject({ error: err });
            } else {
                resolve({ 
                    success: { 
                        ETH: data.BTC_ETH, 
                        LTC: data.BTC_LTC, 
                        DASH: data.BTC_DASH 
                    } 
                });
            }
        });
    });
};