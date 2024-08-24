import React, { useState } from 'react';
import './login.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import BallAni from '../ball-ani/BallAni';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", user); // Log form data

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const responseData = await response.json(); // Parse the JSON response
      console.log("Full response data:", responseData); // Print the entire response data
      
      if (response.ok) {
        if (responseData && responseData.username) {
          alert(`Login Successful! Welcome, ${responseData.username}`);
          props.getusername(responseData.username)
        } else {
          alert("Login Successful, but username not found in response"); // Fallback alert message
        }

        navigate('/'); // Redirect after showing alert
      } else {
        console.error('Login failed', responseData.message || responseData);
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log("Login error", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="grid-container">
      <div className="animation-container">
        <BallAni />
      </div>
      <div className="form-container mainbackground">
        <Container className="d-flex justify-content-center align-items-center vh-100 mainbackground">
          <Row className="w-100">
            <Col xs={12} md={10} lg={8} className="mx-auto">
              <h2 className="mb-5">Login to Your Account</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleInput}
                    name="email"
                    type="email"
                    value={user.email}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={handleInput}
                    name="password"
                    type="password"
                    value={user.password}
                    placeholder="Enter password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
