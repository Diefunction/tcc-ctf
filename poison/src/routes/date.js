const express = require("express");
const router = express.Router();

const dateController = require('../controllers/date');

router.get('/date', dateController.getDate);

module.exports = router;