const express = require('express');
const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const userController = require('../controllers/user_controller');

const router = express.Router();

router.put('/:id', verifyToken, verifyTokenAndAuthorization, userController.updateUser);

module.exports = router;