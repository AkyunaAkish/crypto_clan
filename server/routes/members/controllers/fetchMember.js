const fetchMember = require('../../../database/queries/fetchMember');

module.exports = (req, res) => {
    console.log('req.params.name', req.params.name)
    fetchMember(req.params.name).then((member) => res.json(member))
                                .catch((err) => res.json({ err: err }));
};