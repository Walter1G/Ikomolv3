import React from "react";
import TasksSideNav from "../components/TasksSideNav";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TasksPage() {
  return (
    <Container fluid className="min-vh-100">
      <Row className="h-100">
        {/* Sidebar - Visible on md and larger */}
        <Col md={3} lg={2} className="d-none d-md-block bg-light">
          <TasksSideNav />
        </Col>

        {/* Main Content */}
        <Col xs={12} md={9} lg={10}>
          {/* Navbar for small screens */}
          <div className="d-md-none mb-3">
            <TasksSideNav />
          </div>

          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default TasksPage;
