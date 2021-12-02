const express = require("express");
const router = express.Router();

const servicesController = require('../controllers/services');

router.get('*', servicesController.getService);
router.put('*', servicesController.putService);

module.exports = router;