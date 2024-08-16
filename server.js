const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors")

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
};

app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use(errorMiddleware);
// app.get("/",(req,res)=>{
//     res.status(200).send('welcome to my project');
// })

// app.get("/register",(req,res)=>{
//     res.status(200).send('welcome to my Register page');
// })

connectDb().then(()=>{
app.listen(5000,()=>{
    console.log("server is running")
})
});