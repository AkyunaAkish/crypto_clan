require('dotenv').config({ path: '../../../.env'});

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

// loading the coin model to register 
// before referencing the coin model
require('../models/coin');

const Coin = mongoose.model('coin');

const coinSeeds = [
    {
        name: 'ethereum',
        exchangeName: 'Kraken'
    },
    {
        name: 'ethereum',
        exchangeName: 'Poloniex'
    },
    {
        name: 'ethereum',
        exchangeName: 'Coin Cap'
    },
    {
        name: 'litecoin',
        exchangeName: 'Kraken'
    },
    {
        name: 'litecoin',
        exchangeName: 'Poloniex'
    },
    {
        name: 'litecoin',
        exchangeName: 'Coin Cap'
    },
    {
        name: 'dash',
        exchangeName: 'Kraken'
    },
    {
        name: 'dash',
        exchangeName: 'Poloniex'
    },
    {
        name: 'dash',
        exchangeName: 'Coin Cap'
    }
];

function seedCoins() {
    const saves = [];

    coinSeeds.forEach((coin) => {
        return saves.push(new Coin(coin).save());
    });

    Promise.all(saves)
           .then((results) => {
               console.log('Coin seed results: ', results);
           })
           .catch((errs) => {
               console.log('Coin seed errors: ', errs);
           });
}

seedCoins();