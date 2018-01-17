const fetchMembers = require('../../../database/queries/fetchMembers');

module.exports = (req, res) => {
    fetchMembers().then((members) => res.json(members))
                  .catch((err) => res.json({ err: err }));
};