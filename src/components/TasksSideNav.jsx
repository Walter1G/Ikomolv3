import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function TasksSideNav() {
  return (
    <>
      <div className="d-none d-md-flex flex-column bg-light  vh-100">
        <Nav className="flex-column">
          <Nav.Link as={NavLink} to="create-task">
            Add
          </Nav.Link>
          <Nav.Link as={NavLink} to="analytics">
            Analytics
          </Nav.Link>
        </Nav>
      </div>

      <Navbar expand="md" className=" d-md-none bg-light">
        <Navbar.Toggle aria-controls="tasks-nav" />
        <Navbar.Collapse id="tasks-nav">
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="create-task">
              Add
            </Nav.Link>
            <Nav.Link as={NavLink} to="analytics">
              Analytics
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TasksSideNav;
