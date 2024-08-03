const express = require('express');
const { createOrder } = require('../Controllers/OrderController');
const router = express.Router();

// Define routes with correct method chaining
router.route('/orders').post(createOrder);

module.exports = router;
