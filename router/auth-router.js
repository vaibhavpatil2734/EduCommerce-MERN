const express = require("express");
const router = express.Router();
// const {home, register} = require("../controllers/auth-controller")
const authcontroller = require("../controllers/auth-controller")
const signupSchema = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middleware")

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);



//############without controller with 2 ways
// router.get("/",(req,res)=>{
//     res.status(200).send('welcome to my project');
// })

// router.route("/register").get((req,res)=>{
//         res.status(200).send('welcome to my Register page');
//     })

module.exports = router;