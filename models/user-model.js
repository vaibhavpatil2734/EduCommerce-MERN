const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Ensure bcrypt is required
const jwt = require("jsonwebtoken");
require('dotenv').config();


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

// Password hashing before saving the user
// userSchema.pre('save', async function (next) {
//     const user = this;

//     if (!user.isModified("password")) {
//         return next();  // Exit if the password is not modified
//     }

//     try {
//         const saltRounds = 10;
//         const salt = await bcrypt.genSalt(saltRounds);
//         const hash_password = await bcrypt.hash(user.password, salt);
//         user.password = hash_password;
//         next();  // Proceed to save the user
//     } catch (error) {
//         next(error);  // Pass the error to the next middleware or error handler
//     }
// });

// userSchema.methods.comparePassword = async function(password){
//     return bcrypt.compare(password, this.password);
// }

// JWT token generation method
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),  // Convert ObjectId to string
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECTECT_KEY,  // Make sure this key is correctly set in your environment
        {
            expiresIn: "30d",
        });
    } catch (error) {
        console.error("Error generating token:", error);
        throw error;  // You might want to throw this error or handle it as per your application needs
    }
};

// Model creation
const User = mongoose.model("Users", userSchema);




module.exports = User;
