// Models/ProductModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    rating: String,
    images: [{
        image: String
    }],
    category: String,
    sellers: String,
    stock: String,
    noOfReviews: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
