const express = require("express");
const app = express();

const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const coursesRouter = require("./router/courses-router");
const serviceRouter = require("./router/service-router"); // Ensure this path is correct
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/coursesdata", coursesRouter);
//app.use("/api/service", serviceRouter); // Uncommented this line to use the serviceRouter
app.use(errorMiddleware);

// Adding debug log
console.log("Routes configured");

connectDb()
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch(err => {
        console.error("Failed to connect to database", err);
    });
