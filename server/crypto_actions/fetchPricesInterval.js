const fetchCoin = require('./fetchCoin');
const fetchCoins = require('../database/queries/fetchCoins');
const savePrice = require('../database/queries/savePrice');

const gatherPrices = (io) => {
    const fetchPromises = [
        fetchCoin('ethereum', 'coinCap'),
        fetchCoin('litecoin', 'coinCap'),
        fetchCoin('dash', 'coinCap'),
        fetchCoin(null, 'poloniex'),
        fetchCoin('XETHXXBT', 'kraken'),
        fetchCoin('XLTCXXBT', 'kraken'),
        fetchCoin('DASHXBT', 'kraken')
    ];

                // Using map to ensure that rejected promises
                // don't stop other promises from finishing
    Promise.all(fetchPromises.map((p) => p.catch((e) => e)))
           .then((results) => {
               
               const exchangesResults = results.reduce((f, c) => {
                                       // checking if result is from coin cap
                                       if (!c.success && c.data && c.data[0] && c.data[0].symbol) {
                                           f.coinCap[c.data[0].symbol] = c.data[0];
                                       } else if (c.success) {
                                           f.poloniex = c.success;
                                       } else if (c['XETHXXBT']){
                                           f.kraken['ETH'] = { price_btc: c['XETHXXBT'].c[0], volume: c['XETHXXBT'].c[1] };
                                       } else if (c['XLTCXXBT']) {
                                           f.kraken['LTC'] = { price_btc: c['XLTCXXBT'].c[0], volume: c['XLTCXXBT'].c[1] };
                                       } else if (c['DASHXBT']) {
                                           f.kraken['DASH'] = { price_btc: c['DASHXBT'].c[0], volume: c['DASHXBT'].c[1] };
                                       }
   
                                       return f; 
                                   }, { coinCap: {}, poloniex: {}, kraken: {} });

               if(exchangesResults.coinCap.DASH && 
                  exchangesResults.coinCap.ETH && 
                  exchangesResults.coinCap.LTC) {

                   const dashSaveConfigCC = {
                       date: new Date(),
                       price: exchangesResults.coinCap.DASH.price_btc,
                       volume: exchangesResults.coinCap.DASH.volume
                   };

                   const ethSaveConfigCC = {
                       date: new Date(),
                       price: exchangesResults.coinCap.ETH.price_btc,
                       volume: exchangesResults.coinCap.ETH.volume
                   };

                   const ltcSaveConfigCC = {
                       date: new Date(),
                       price: exchangesResults.coinCap.LTC.price_btc,
                       volume: exchangesResults.coinCap.LTC.volume
                   };

                   const saves = [
                       savePrice('dash', 'Coin Cap', dashSaveConfigCC),
                       savePrice('ethereum', 'Coin Cap', ethSaveConfigCC),
                       savePrice('litecoin', 'Coin Cap', ltcSaveConfigCC)
                   ];

                   Promise.all(saves.map((p) => p.catch((e) => e)))
                          .then((saveRes) => fetchCoins())
                          .then((coins) => io.sockets.emit('update-coins', coins));    
               } else {
                   console.log('--------exchangesResults.coinCap ERR--------', exchangesResults.coinCap);
               }

               if (exchangesResults.poloniex && 
                   exchangesResults.poloniex.DASH && 
                   exchangesResults.poloniex.ETH && 
                   exchangesResults.poloniex.LTC) {

                   const dashSaveConfig = {
                        date: new Date(),
                        price: exchangesResults.poloniex.DASH.last,
                        volume: exchangesResults.poloniex.DASH.baseVolume
                   };
                   
                   const ethSaveConfig = {
                        date: new Date(),
                        price: exchangesResults.poloniex.ETH.last,
                        volume: exchangesResults.poloniex.ETH.baseVolume
                   };
                   
                   const ltcSaveConfig = {
                        date: new Date(),
                        price: exchangesResults.poloniex.LTC.last,
                        volume: exchangesResults.poloniex.LTC.baseVolume
                   };

                   const saves = [ 
                       savePrice('dash', 'Poloniex', dashSaveConfig),
                       savePrice('ethereum', 'Poloniex', ethSaveConfig),
                       savePrice('litecoin', 'Poloniex', ltcSaveConfig)
                    ];

                    Promise.all(saves.map((p) => p.catch((e) => e)))
                           .then((saveRes) => fetchCoins())
                           .then((coins) => io.sockets.emit('update-coins', coins));
               } else {
                   console.log('--------exchangesResults.poloniex ERR--------', exchangesResults.poloniex);
               }

               if (exchangesResults.kraken && 
                   exchangesResults.kraken.DASH && 
                   exchangesResults.kraken.ETH && 
                   exchangesResults.kraken.LTC) {

                   const dashSaveConfig = {
                        date: new Date(),
                        price: exchangesResults.kraken.DASH.price_btc,
                        volume: exchangesResults.kraken.DASH.volume
                   };
                   
                   const ethSaveConfig = {
                        date: new Date(),
                        price: exchangesResults.kraken.ETH.price_btc,
                        volume: exchangesResults.kraken.ETH.volume
                   };
                   
                   const ltcSaveConfig = {
                        date: new Date(),
                        price: exchangesResults.kraken.LTC.price_btc,
                        volume: exchangesResults.kraken.LTC.volume
                   };

                   const saves = [ 
                       savePrice('dash', 'Kraken', dashSaveConfig),
                       savePrice('ethereum', 'Kraken', ethSaveConfig),
                       savePrice('litecoin', 'Kraken', ltcSaveConfig)
                    ];

                    Promise.all(saves.map((p) => p.catch((e) => e)))
                           .then((saveRes) => fetchCoins())
                           .then((coins) => io.sockets.emit('update-coins', coins));
               } else {
                   console.log('--------exchangesResults.kraken ERR--------', exchangesResults.kraken);
               }
           });

};

// passing through 'io' to call socket.io methods
module.exports = (io) => {
    gatherPrices(io);

    setInterval(() => {
        gatherPrices(io);
    }, 60000); // 1 min interval
};