const express = require('express');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const productController = require('../controllers/product_controller');

const router = express.Router();

router.post('/create', verifyToken, verifyTokenAndAdmin, productController.create);
router.put('/:id', verifyToken, verifyTokenAndAdmin, productController.updateProduct);
router.delete('/:id', verifyToken, verifyTokenAndAdmin, productController.deleteProduct);
router.get('/find/:id', productController.getProduct);
router.get('/find', productController.getAllProducts);

module.exports = router;