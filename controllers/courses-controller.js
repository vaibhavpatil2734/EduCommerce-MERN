// controllers/courses-controller.js
const Course = require("../models/courses-model"); // Import your Course model

// Function to handle getting all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses from the database
    console.log(courses)
    res.status(200).json(courses); // Send the fetched courses as a JSON response
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Server error while fetching courses" });
  }
};

module.exports = { getCourses };
