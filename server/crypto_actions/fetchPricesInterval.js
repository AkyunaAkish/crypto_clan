const fetchCoins = require('../database/queries/fetchCoins');
const savePrice = require('../database/queries/savePrice');
const throttleApiCalls = require('./throttleApiCalls');
const fs = require('fs');

const gatherPrices = (io) => {
    // Using fetchPromises.map to ensure that rejected promises
    // don't stop other promises from finishing and instead will 
    // gather resolves/rejects in one array given to the .then
    throttleApiCalls().then((unfinishedApiCalls) => Promise.all(unfinishedApiCalls.map((p) => p.catch((e) => e))))
                      .then((results) => {               
                          const exchangesResults = results.reduce((f, c) => {
                                                          if (!c.success && c.data && c.data[0] && c.data[0].symbol) { // checking if results are from coin cap
                                                              f.coinCap[c.data[0].symbol] = c.data[0];
                                                          } else if (c.success) { // checking if results are from poloniex
                                                              f.poloniex = c.success;
                                                          } else if (c['XETHXXBT']) { // checking if specific results are from kraken
                                                              f.kraken['ETH'] = { price_btc: c['XETHXXBT'].c[0], volume: c['XETHXXBT'].c[1] };
                                                          } else if (c['XLTCXXBT']) { // checking if specific results are from kraken
                                                              f.kraken['LTC'] = { price_btc: c['XLTCXXBT'].c[0], volume: c['XLTCXXBT'].c[1] };
                                                          } else if (c['DASHXBT']) { // checking if specific results are from kraken
                                                              f.kraken['DASH'] = { price_btc: c['DASHXBT'].c[0], volume: c['DASHXBT'].c[1] };
                                                          }
  
                                                          return f; 
                                                      }, { coinCap: {}, poloniex: {}, kraken: {} });
  
  
                          const allResultsPresent = (
                                                          exchangesResults.coinCap.DASH &&
                                                          exchangesResults.coinCap.ETH &&
                                                          exchangesResults.coinCap.LTC
                                                      ) && (
                                                          exchangesResults.poloniex &&
                                                          exchangesResults.poloniex.DASH &&
                                                          exchangesResults.poloniex.ETH &&
                                                          exchangesResults.poloniex.LTC
                                                      ) && (
                                                          exchangesResults.kraken &&
                                                          exchangesResults.kraken.DASH &&
                                                          exchangesResults.kraken.ETH &&
                                                          exchangesResults.kraken.LTC
                                                      );

                          if(allResultsPresent) {
                              return exchangesResults;
                          } else {
                              // reject with error if not all coin data was returned to be appended to error file in 
                              // the .catch
                              return Promise.reject(`--------!Not all results were returned from exchange APIs ${new Date()}!--------: 
                              \n ${JSON.stringify(exchangesResults, null, 2)} \n 
                              -------------------------------------------------------------------`);
                          }                             
                      })
                      .then((exchangesResults) => {
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

                              const savesCC = [
                                  savePrice('dash', 'Coin Cap', dashSaveConfigCC),
                                  savePrice('ethereum', 'Coin Cap', ethSaveConfigCC),
                                  savePrice('litecoin', 'Coin Cap', ltcSaveConfigCC)
                              ];

                              // save coin cap results
                              return Promise.all(savesCC.map((p) => p.catch((e) => e))).then(() => exchangesResults);
                      })
                      .then((exchangesResults) => {
                          const dashSaveConfigP = {
                              date: new Date(),
                              price: exchangesResults.poloniex.DASH.last,
                              volume: exchangesResults.poloniex.DASH.baseVolume
                          };
              
                          const ethSaveConfigP = {
                              date: new Date(),
                              price: exchangesResults.poloniex.ETH.last,
                              volume: exchangesResults.poloniex.ETH.baseVolume
                          };
              
                          const ltcSaveConfigP = {
                              date: new Date(),
                              price: exchangesResults.poloniex.LTC.last,
                              volume: exchangesResults.poloniex.LTC.baseVolume
                          };
              
                          const savesP = [
                              savePrice('dash', 'Poloniex', dashSaveConfigP),
                              savePrice('ethereum', 'Poloniex', ethSaveConfigP),
                              savePrice('litecoin', 'Poloniex', ltcSaveConfigP)
                          ];
              
                          // save poloniex results
                          return Promise.all(savesP.map((p) => p.catch((e) => e))).then(() => exchangesResults);
                      })
                      .then((exchangesResults) => {
                          // save kraken results and emit updated coins to connected sockets
                          const dashSaveConfigK = {
                              date: new Date(),
                              price: exchangesResults.kraken.DASH.price_btc,
                              volume: exchangesResults.kraken.DASH.volume
                          };
              
                          const ethSaveConfigK = {
                              date: new Date(),
                              price: exchangesResults.kraken.ETH.price_btc,
                              volume: exchangesResults.kraken.ETH.volume
                          };
              
                          const ltcSaveConfigK = {
                              date: new Date(),
                              price: exchangesResults.kraken.LTC.price_btc,
                              volume: exchangesResults.kraken.LTC.volume
                          };
              
                          const saves = [
                              savePrice('dash', 'Kraken', dashSaveConfigK),
                              savePrice('ethereum', 'Kraken', ethSaveConfigK),
                              savePrice('litecoin', 'Kraken', ltcSaveConfigK)
                          ];
              
                          return Promise.all(saves.map((p) => p.catch((e) => e)));
                      })
                      .then(() => fetchCoins())
                      .then((coins) => {
                          console.log('Saved exchange api coin results...', new Date()); 
                          
                          const leastToGreatesPrices = coins.map((coin) => {
                              coin.prices = coin.prices.reverse();
                              return coin;
                          });

                          io.sockets.emit('update-coins', leastToGreatesPrices);
                      })
                      .catch((err) => {
                          console.log('Fetching coins failed, check server/crypto_actions/fetchPricesErrors.txt file...', new Date()); 
                          fs.appendFileSync('${__dirname}/fetchPricesErrors.txt', typeof(err) === 'string' ? err : JSON.stringify(err, null, 2));
                      });
};

// passing through 'io' to call socket.io methods
module.exports = (io) => {
    // gatherPrices(io);

    // setInterval(() => {
    //     gatherPrices(io);
    // }, 30000); // .5 min interval
    
    // do nothing, might be causing a memory leak
}; 




