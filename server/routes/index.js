const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/users', require('./user'));
router.use('/products', require('./product'));

module.exports = router;