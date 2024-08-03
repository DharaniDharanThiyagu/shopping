const express = require('express');
const { getProducts, getSingleProduct } = require('../Controllers/productContreoler');  // Ensure this path is correct
const router = express.Router();

// Define routes with correct method chaining
router.get('/products',getProducts)
router.get('/products/:id',getSingleProduct)

module.exports = router;
