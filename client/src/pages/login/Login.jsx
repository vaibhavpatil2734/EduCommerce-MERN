import React, { useState } from 'react';
import './login.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function Register() {

  const [user, setUser] = useState({
    email: "",
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

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(user)
    try {
    const response =  fetch('http://localhost:5000/api/auth/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    });
    console.log(response);
  } catch (error) {
      console.log("login error",error);
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
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Row className="w-100">
            <Col xs={12} md={20} lg={20} className="mx-auto">
              <h2 className="mb-5">Create an Account</h2>
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
