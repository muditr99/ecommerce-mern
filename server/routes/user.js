const express = require('express');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const userController = require('../controllers/user_controller');

const router = express.Router();

router.put('/:id', verifyToken, verifyTokenAndAuthorization, userController.updateUser);
router.delete('/:id', verifyToken, verifyTokenAndAuthorization, userController.deleteUser);
router.get('/find/:id', verifyToken, verifyTokenAndAdmin, userController.getUser);
router.get('/find', verifyToken, verifyTokenAndAdmin, userController.getAllUsers);

module.exports = router;