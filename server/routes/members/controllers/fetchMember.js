const fetchMember = require('../../../database/queries/fetchMember');

module.exports = (req, res) => {
    fetchMember(req.params.name).then((member) => res.json(member))
                                .catch((err) => res.json({ err: err }));
};