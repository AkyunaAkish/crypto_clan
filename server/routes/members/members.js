const express = require('express');
const router = express.Router();

const fetchMembers = require('./controllers/fetchMembers.js');

router.get('/', fetchMembers);

module.exports = router;