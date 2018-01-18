const Coin = require('../models/coin');

module.exports = () => Coin.find({}).populate({ path: 'prices', options: { sort: '-date', limit: 50 } });

// example of filtering results of find based on exchangeName
// module.exports = () => Coin.find({
//                                     $or: [
//                                         { exchangeName: 'Poloniex' },
//                                         { exchangeName: 'Coin Cap' }
//                                     ]
//                                 }).populate({ path: 'prices', options: { sort: 'date', limit: 40 } });
