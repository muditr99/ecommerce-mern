const express = require('express');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const orderController = require('../controllers/order_controller');

const router = express.Router();

router.post('/create', verifyToken, orderController.create);
router.put('/:id', verifyToken, verifyTokenAndAdmin, orderController.updateOrder);
router.delete('/:id', verifyToken, verifyTokenAndAdmin, orderController.deleteOrder);
router.get('/find/:id', verifyToken, verifyTokenAndAuthorization, orderController.getUserOrders);
router.get('/find', verifyToken, verifyTokenAndAuthorization, orderController.getAllUsersOrders);

module.exports = router;