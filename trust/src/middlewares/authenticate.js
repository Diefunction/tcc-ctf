const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'token is required for authentication' });
    }

    try {
        req.jwt = jwt.verify(token, 'secret');
    } catch (error) {
        return res.status(400).json({ message: 'signature is not valid' });
    }
    return next();
};

module.exports = authenticate;