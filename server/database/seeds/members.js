require('dotenv').config({ path: '../../../.env' });

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

// loading the member model to register 
// before referencing the member model
require('../models/member');

const Member = mongoose.model('member');

// package used to generate bitcoin wallet addresses
const bitcoin = require('bitcoinjs-lib');

const memberSeeds = [
    {
        name: 'Huey',
        preferredCoin: 'ethereum',
        btcWalletAddress: bitcoin.ECPair.makeRandom().toWIF()
    },
    {
        name: 'Luey',
        preferredCoin: 'litecoin',
        btcWalletAddress: bitcoin.ECPair.makeRandom().toWIF()
    },
    {
        name: 'Duey',
        preferredCoin: 'dash',
        btcWalletAddress: bitcoin.ECPair.makeRandom().toWIF()
    }
];

function seedMembers() {
    const saves = [];

    memberSeeds.forEach((member) => {
        return saves.push(new Member(member).save());
    });

    Promise.all(saves)
           .then((results) => {
               console.log('Member seed results: ', results);
            })
           .catch((errs) => {
               console.log('Member seed errors: ', errs);
           });
}

seedMembers();