const express = require('express');
const router = express.Router();

const { index, dashboard } = require('../controllers/index.controller');

router.get('/', index);

router.get('/dashboard', dashboard);

module.exports = router;