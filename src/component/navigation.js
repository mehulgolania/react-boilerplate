import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return(
    <>
      <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" className="mb-3" sticky="top">
        <LinkContainer to="/">
          <Navbar.Brand>React-Boilerplate</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer exact to="/"><Nav.Link active={false}>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/about"><Nav.Link active={false}>About</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link active={false}>Contact</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;