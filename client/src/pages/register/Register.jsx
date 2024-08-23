import React, { useState } from 'react';
import './register.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import BallAni from '../ball-ani/BallAni';

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="grid-container">
      <div className="animation-container">
       <BallAni/>
      </div>
      <div className="form-container mainbackground">
        <Container className="d-flex justify-content-center align-items-center vh-100 mainbackground">
          <Row className="w-100">
            <Col xs={12} md={20} lg={20} className="mx-auto">
              <h2 className="mb-5">Create an Account</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={handleInput}
                    name="username"
                    type="text"
                    value={user.username}
                    placeholder="Enter username"
                  />
                </Form.Group>

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

                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label>Phone No.</Form.Label>
                  <Form.Control
                    onChange={handleInput}
                    name="phone"
                    type="number"
                    value={user.phone}
                    placeholder="Enter Phone No."
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
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
