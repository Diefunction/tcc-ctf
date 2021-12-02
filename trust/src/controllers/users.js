const { execSync } = require('child_process');
const information = (req, res) => {
    try {
        res.status(200).json({ message: 'information', username: req.jwt.username });
    } catch (error) {
        res.status(400).json({ message: error.toString() });
    }
};

const isUsernameExist = (req, res) => {
    try {
        let stdout = execSync(`/usr/bin/getent passwd ${req.jwt.username}`).toString();
        res.status(200).json({ message: 'username exists', output: stdout });
    } catch (error) {
        res.status(404).json({ error: error.toString(), message: 'username is not exist' });
    }
};

module.exports = { information, isUsernameExist };