// routes/courses-router.js
const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/courses-controller"); // Import the courses controller

// Define the route to get all courses
router.route("/courses").get(coursesController.getCourses);

module.exports = router; // Export the router