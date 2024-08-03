const express = require('express');
const app = express();
const dbConnect = require('./Config/dbConnect');
const dotenv = require('dotenv');
const path = require('path');
const cors=require('cors')


// Load environment variables
dotenv.config({ path: path.join(__dirname, 'Config', 'config.env') });

// Connect to the database
dbConnect();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' // Your React app's URL
}));
// Import routes
const productRoutes = require('./Routes/product');
const orderRoutes = require('./Routes/order');  // Ensure this path is correct

// Use routes
app.use('/api/v1/', productRoutes);
app.use('/api/v1', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
