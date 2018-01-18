const fetchCoins = require('../../../database/queries/fetchCoins');

module.exports = (req, res) => {
    fetchCoins().then((coins) => {
                   const leastToGreatesPrices = coins.map((coin) => {
                       coin.prices = coin.prices.reverse();
                       return coin;
                   }); 

                   res.json(leastToGreatesPrices);
                })
                .catch((err) => res.json({ err: err }));
};