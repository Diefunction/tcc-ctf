const utils = require('../utils/utils.js');

const getDate = (req, res) => {
    utils.execute('date').then(
        output => { res.status(200).json({ message: output.replace('\n', '') }); },
        err => { res.status(500).send(err.toString()); }
    );
};

module.exports = { getDate };