const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
    date: Date,
    price: Number,
    volume: Number
});

const Price = mongoose.model('price', PriceSchema);

module.exports = Price;