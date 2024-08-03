const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: {
        type: Array,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;
