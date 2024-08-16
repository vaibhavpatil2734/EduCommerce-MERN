import React from 'react';
import "./navbar.css"
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

export default function Navbar() {
  return (
    <div className='NavbarPosition'>
      <BootstrapNavbar expand="lg" className="bg-body-tertiary">
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
              {/* <NavLink to="/about" className="nav-link">About</NavLink> */}
            </Nav>
            <Nav className="ml-auto">  {/* Add ml-auto to align to the right */}
              <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
}

