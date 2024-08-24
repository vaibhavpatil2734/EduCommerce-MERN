import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './about.css'; // Assuming you will style this page using a separate CSS file

// Import the image
import teamImage from './team.jpg'; // Adjust the path based on your folder structure

const About = () => {
  return (
    <div className="about-page">
      <Container fluid>
        <Row className="my-5">
          <Col>
            <h1 className="text-center mb-4">About Us</h1>
            <p className="lead text-center">
              Welcome to our online course-selling platform! Our mission is to provide high-quality educational content to learners worldwide, empowering them to achieve their personal and professional goals.
            </p>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body className="color-bg">
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  We strive to democratize education by offering affordable and accessible courses on a wide range of topics. Our platform is designed to cater to learners of all levels, from beginners to advanced professionals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body className="color-bg">
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  We envision a world where everyone has the opportunity to learn and grow, regardless of their background or location. By providing top-notch educational resources, we aim to bridge the gap between knowledge and aspiration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h2 className="text-center mb-4">Meet Our Team</h2>
            <Row className="d-flex justify-content-center">
              {/* Example team member card, repeat for each team member */}
              <Col md={4} className="mb-4">
                <Card className="shadow-sm text-center">
                  <Card.Img
                    variant="top"
                    src={teamImage}
                    alt="Team Member"
                  />
                  <Card.Body className="color-bg">
                    <Card.Title>Jane Doe</Card.Title>
                    <Card.Text>CEO & Founder</Card.Text>
                    <Card.Text>
                      Jane is passionate about education and has over 15 years of experience in the industry. She is committed to making learning accessible to everyone.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Add more team members as needed */}
            </Row>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h2 className="text-center mb-4">Why Choose Us?</h2>
            <ul className="list-unstyled">
              <li className="my-3">
                <h4>Expert Instructors</h4>
                <p>All our courses are taught by industry experts with real-world experience.</p>
              </li>
              <li className="my-3">
                <h4>Flexible Learning</h4>
                <p>Learn at your own pace, on your own schedule. Our platform is accessible anytime, anywhere.</p>
              </li>
              <li className="my-3">
                <h4>Comprehensive Content</h4>
                <p>Our courses cover a wide range of topics, from programming to digital marketing, catering to all skill levels.</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
