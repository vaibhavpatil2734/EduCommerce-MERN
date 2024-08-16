import React, { useState } from 'react';
import './contact.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    message:""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user)
  }
  return (
    <div className="grid-container">
      <div className="animation-container">
        <div className="bucket">
          <div className="ball ball1"></div>
          <div className="ball ball2"></div>
          <div className="ball ball3"></div>
          <div className="ball ball4"></div>
          <div className="ball ball5"></div>
        </div>
      </div>
      <div className="form-container">
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Row className="w-100">
            <Col xs={12} md={20} lg={20} className="mx-auto">
              <h2 className="mb-5">Contact Us</h2>
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
                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <textarea   onChange={handleInput} value={user.password} placeholder="Enter Message" name="message" rows="8" cols="30" ></textarea><br></br>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Proceed
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
