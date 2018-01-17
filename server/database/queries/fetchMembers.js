const Member = require('../models/member');

module.exports = () => Member.find({});
