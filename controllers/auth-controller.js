const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to my project exported:controller');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        console.log(req.body);
        
        const userExist = await User.findOne({ email });
        
        if (userExist) {
            console.log("User already exists");
            return res.status(400).json({ msg: "Email already exists" });
        }

        // const hashedPassword = await bcrypt.hash(password, 10);
        const userCreated = await User.create({ username, email, phone, password });

        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error register" });
    }
};

// Login page
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            console.log("Login unsuccessful");
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Assuming password is not hashed for now; if it is, use bcrypt.compare()
        if (password === userExist.password) {
            const token = await userExist.generateToken();
            res.status(200).json({
                msg: "Login successful",
                token,
                userId: userExist._id.toString(),
                username: userExist.username, // Include username in the response
            });
            console.log("Login successful!");
        } else {
            res.status(401).json({ message: "Invalid email or password" });
            console.log("Login unsuccessful");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        next(error);
    }
};

module.exports = { home, register, login };
