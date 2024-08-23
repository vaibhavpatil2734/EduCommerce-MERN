import React from 'react';
import './courses.css'; // Optional, for custom styles

// Sample data
const courses = [
  {
    id: 1,
    name: 'React for Beginners',
    img: 'https://via.placeholder.com/150',
    description: 'Learn the basics of React.js, including components, state, and props.'
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    img: 'https://via.placeholder.com/150',
    description: 'Deep dive into advanced JavaScript concepts and best practices.'
  },
  {
    id: 3,
    name: 'Full-Stack Development',
    img: 'https://via.placeholder.com/150',
    description: 'A comprehensive course covering both frontend and backend development.'
  }
];

export default function Courses() {
  return (
    <div className="courses-container">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <img src={course.img} alt={course.name} className="course-image" />
          <h2 className="course-name">{course.name}</h2>
          <p className="course-description">{course.description}</p>
        </div>
      ))}
    </div>
  );
}
