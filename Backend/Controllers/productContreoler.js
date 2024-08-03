// Controllers/ProductController.js
const productModel = require('../Models/ProductModel');

exports.getProducts = async (req, res) => {
    try {
      const query= req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
      }}:{}
        const products = await productModel.find(query);
        res.json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

exports.getSingleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};
