// models/course-model.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  details: String
});

Course = mongoose.model('Course', courseSchema);

module.exports = Course;