const express = require('express');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const cartController = require('../controllers/cart_controller');

const router = express.Router();

router.post('/create', verifyToken, cartController.create);
router.put('/:id', verifyToken, verifyTokenAndAuthorization, cartController.updateCart);
router.delete('/:id', verifyToken, verifyTokenAndAuthorization, cartController.deleteCart);
router.get('/find/:id', verifyToken, verifyTokenAndAuthorization, cartController.getCart);
router.get('/find', verifyToken, verifyTokenAndAdmin, cartController.getAllCarts);

module.exports = router;