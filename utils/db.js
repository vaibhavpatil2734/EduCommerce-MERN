const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file

const URI = process.env.MONGODB_URI; // Default URI if MONGODB_URI is not set

const connectDb = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection is successful");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit with failure code
    }
}

module.exports = connectDb;
