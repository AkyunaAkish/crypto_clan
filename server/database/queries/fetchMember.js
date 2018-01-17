const Member = require('../models/member');

module.exports = (name) => Member.findOne({ name: name[0].toUpperCase() + name.slice(1) });
