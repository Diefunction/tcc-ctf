const express = require('express');
const router = express.Router();

const authentication = require('../middlewares/authenticate');
const usersController = require('../controllers/users');

router.get('/information', authentication, usersController.information);

router.get('/system/exist', authentication, usersController.isUsernameExist);

module.exports = router;