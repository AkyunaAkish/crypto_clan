const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name: String,
    preferredCoin: String,
    btcWalletAddress: String
});

const Member = mongoose.model('member', MemberSchema);

module.exports = Member;