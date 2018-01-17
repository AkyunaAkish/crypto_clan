const fetchCoins = require('../../../database/queries/fetchCoins');

module.exports = (req, res) => {
    fetchCoins().then((coins) => res.json(coins))
                .catch((err) => res.json({ err: err }));
};