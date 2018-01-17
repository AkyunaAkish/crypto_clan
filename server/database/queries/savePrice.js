const Coin = require('../models/coin');
const Price = require('../models/price');

module.exports = (coinName, exchangeName, priceProps) => {
    const price = new Price(priceProps);

    const transactions = [
        Coin.findOne({ name: coinName, exchangeName }), 
        price.save()
    ];

    return Promise.all(transactions)
                  .then((coinAndPrice) => {
                      const newPrices = coinAndPrice[0].prices.concat(coinAndPrice[1]);

                      return coinAndPrice[0].update({ prices: newPrices });
                  })
                  .then(() => {
                      return Coin.find({}).populate('prices');
                  })
                  .catch((err) => {
                      return err;
                  });
};
