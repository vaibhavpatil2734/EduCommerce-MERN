import React from 'react';
import "./navbar.css"
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

export default function Navbar(props) {
  return (
    <div className='NavbarPosition'>
      <BootstrapNavbar expand="lg" className="bg-body-tertiary bg-secondary">
        <Container>
          <BootstrapNavbar.Brand><NavLink to="/" className="nav-link text-dark">Home</NavLink></BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/service" className="nav-link">Service</NavLink>
              <NavLink to="/register" className="nav-link">Register</NavLink>
              <NavLink to="/login" className="nav-link">Login</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav>
            {/* <Nav className="ml-auto">  
              <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav> */}
            <Nav className='ml-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="account"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM10,26.39a6,6,0,0,1,11.94,0,11.87,11.87,0,0,1-11.94,0Zm13.74-1.26a8,8,0,0,0-15.54,0,12,12,0,1,1,15.54,0ZM16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,16,16Z"></path></svg>
              <h5>{props.username}</h5>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
}

