const express = require('express');
const router = express.Router();

const fetchMembers = require('./controllers/fetchMembers.js');
const fetchMember = require('./controllers/fetchMember.js');

router.get('/', fetchMembers);
router.get('/:name', fetchMember);

module.exports = router;