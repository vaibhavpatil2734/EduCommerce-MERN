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
            console.log("user alerady exist");
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


//login page
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            console.log("login UnSuccess")
            return res.status(400).json({ message: "Invalid email or password here" });
            
        }
        console.log(userExist.password)

        //const user =  await bcrypt.compare(password, userExist.password);
        //const user =  userExist.comparePassword(password)
        if (password == userExist.password) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
                
            });
            console.log("login success!!")
        } else {
            res.status(401).json({ message: "Invalid email or password here" });
            console.log("login unSuccess")
        }
    } catch (error) {
        console.error(error);
        //res.status(500).json({ message: "Internal server error" });
        next(error);
    }
};


module.exports = { home, register, login };


