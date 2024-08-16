const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

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
            return res.status(400).json({ msg: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userCreated = await User.create({ username, email, phone, password: hashedPassword });

        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error register" });
    }
};


//login page
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid email or password here" });
        }

        //const user =  bcrypt.compare(password, userExist.password);
        const user =  userExist.comparePassword(password)
        if (user) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password here" });
        }
    } catch (error) {
        console.error(error);
        //res.status(500).json({ message: "Internal server error" });
        next(error);
    }
};


module.exports = { home, register, login };


