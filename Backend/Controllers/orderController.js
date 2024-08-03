// Controllers/OrderController.js
const orderModel = require('../Models/orderModel');

exports.createOrder = async (req, res) => {
    try {
        const { cartItems } = req.body; // Assuming the body contains cartItems directly
        
        // Calculate total amount
        const amount = Number(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2);

        // Create new order object
        const newOrder = {
            cartItems: cartItems,
            amount: amount,
            status: 'pending', // Default status or as per your requirement
        };

        // Save the new order to the database
        const order = await orderModel.create(newOrder);

        res.status(201).json({
            success: true,
            data: order // Send back the saved order
        });
    } catch (error) {
        console.error('Error creating order:', error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: 'Internal Server Error' // More user-friendly error message
        });
    }
};
