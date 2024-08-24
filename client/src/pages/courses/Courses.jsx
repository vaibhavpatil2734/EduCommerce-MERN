import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Added Button import
import { useNavigate } from 'react-router-dom';
import './courses.css'; // Ensure you have this file for custom styles

export default function Courses(props) {
  const [courses, setCourses] = useState([]); // State to store courses data
  const [error, setError] = useState(null); // State to store error messages
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  useEffect(() => {
    // Fetch courses data from the backend
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/coursesdata/courses'); // Replace with your backend URL
        if (!response.ok) {
          const errorMessage = await response.text(); // Get more info about the error
          throw new Error(`Network response was not ok: ${errorMessage}`);
        }
        const data = await response.json(); // Parse the JSON from the response
        setCourses(data); // Set the fetched data to state
      } catch (err) {
        console.error('Failed to fetch courses:', err);
        setError('Failed to load courses. Please try again later.');
      }
    };

    fetchCourses(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="courses-page course-position">
      <Container fluid>
        {/* Main Heading */}
        <Row className="my-5">
          <Col>
            <h1 className="text-center mb-4">Our Courses</h1>
            <p className="lead text-center">
              Explore our diverse range of courses designed to help you achieve your learning goals, whether you're a beginner or an experienced professional.
            </p>
          </Col>
        </Row>

        {/* Render courses */}
        {courses.map((course) => {
          // Check if the course ID matches the prop coursenum to conditionally render
          if (props.coursenum === course.id) {
            return (
              <Row key={course.id} className="my-5 justify-content-center mainbackground">
                <Col md={8} className="mb-4">
                  <Card className="shadow-sm mainbackground">
                    <Card.Img variant="top" src={course.img} alt={course.name} />
                    <Card.Body>
                      <Card.Title>{course.name}</Card.Title>
                      <Card.Text>{course.description}</Card.Text>
                      <Card.Text>{course.details}</Card.Text>
                      {/* Corrected onClick function usage */}
                      <Button className='btn btn-outline-warning' onClick={handleClick}>Register and get your course now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          } else {
            return null; // Do not render the course if the ID does not match
          }
        })}
      </Container>
    </div>
  );
}
