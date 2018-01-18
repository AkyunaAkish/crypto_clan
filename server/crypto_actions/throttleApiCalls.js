const fetchCoin = require('./fetchCoin');

module.exports = () => {
    return new Promise((resolve, reject) => {
        const fetchPromises = [];

        const coinsToFetch = [
            { name: 'ethereum', exchange: 'coinCap' },
            { name: 'litecoin', exchange: 'coinCap' },
            { name: 'dash', exchange: 'coinCap' },
            { name: null, exchange: 'poloniex' },
            { name: 'XETHXXBT', exchange: 'kraken' },
            { name: 'XLTCXXBT', exchange: 'kraken' },
            { name: 'DASHXBT', exchange: 'kraken' }
        ];

        // interval logic to throttle each api call 
        // to 1 per 10 seconds
        const intervalId = setInterval(() => {
            if (coinsToFetch.length < 1) {
                resolve(fetchPromises);
                return clearInterval(intervalId);

            } else {
                const spliced = coinsToFetch.splice(0, 1)[0];
                fetchPromises.push(fetchCoin(spliced.name, spliced.exchange));
            }
        }, 3000);
    });
};