const services = require('../data/services.json');

const isValid = (path) => {
    let specials = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>?]+/;
    if (specials.test(path) || path.includes('__')) {
        return { valid: false, code: 400, message: 'not allowed' };
    }
    if (!path.startsWith('/')) {
        return { valid: false, code: 404, message: 'not found' };
    }
    return { valid: true };
};

const search = (path) => {
    if (path.endsWith('/')) {
        path = path.substring(0, path.length - 1);
    }
    path = path.substring(1);
    let object = services;
    let queries = path.split('/');
    for (let query of queries) {
        object = object[query];
    }
    return object;
};

const update = (path, value) => {
    let object = path.split('/').reverse().slice(1).reverse().join('/');
    let key = path.replace(`${object}/`, '');
    search(object)[key] = value;
};


const getService = (req, res) => {
    let path = decodeURIComponent(req.path);
    let validation = isValid(path);
    if (!validation.valid) {
        return res.status(validation.code).json({ message: validation.message });
    }
    let result = search(path);
    return res.status(200).json({ message: result });
};

const putService = (req, res) => {
    let path = decodeURIComponent(req.path);
    let validation = isValid(path);
    if (!validation.valid) {
        return res.status(validation.code).json({ message: validation.message });
    }
    let { value } = req.body;
    update(path, value);
    return res.status(200).json({ message: 'done' });
};

module.exports = { getService, putService };