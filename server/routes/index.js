const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/users', require('./user'));
router.use('/products', require('./product'));
router.use('/cart', require('./cart'));
router.use('/order', require('./order'));

module.exports = router;