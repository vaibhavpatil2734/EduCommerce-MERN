import React, { useState } from 'react';
import './contact.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function Register() {

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch('http://localhost:5000/api/form/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log(await response.json());
    } catch (error) {
      console.log("register", error);
    }
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
        <Container>
          <Row className="form-row">
            <Col xs={12}>
              <h2 className="mb-4">Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={handleInput}
                    name="username"
                    type="text"
                    value={contact.username}
                    placeholder="Enter username"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleInput}
                    name="email"
                    type="email"
                    value={contact.email}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <textarea
                    onChange={handleInput}
                    value={contact.message}
                    placeholder="Enter Message"
                    name="message"
                    rows="7"
                    cols="10"
                    className="form-control"
                  ></textarea>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}