import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, NavLink } from "react-router-dom";

function AppNav() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Nav>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="/ICLLOGO.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Ikomol
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="app-nav" />
        <Navbar.Collapse id="app-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tasks">
              Tasks
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;
