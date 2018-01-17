const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = require('./price');

const CoinSchema = new Schema({
    name: String,
    exchangeName: String,
    prices: [{
        type: Schema.Types.ObjectId,
        ref: 'price'
    }]
});

const Coin = mongoose.model('coin', CoinSchema);

module.exports = Coin;