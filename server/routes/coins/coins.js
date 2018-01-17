const express = require('express');
const router = express.Router();

const fetchCoins = require('./controllers/fetchCoins.js');

router.get('/', fetchCoins);

module.exports = router;