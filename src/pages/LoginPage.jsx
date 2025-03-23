import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function LoginPage() {
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          {" "}
          
          <div className="p-4 shadow rounded bg-light">
            <h1 className="text-center">Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="w-100"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="w-100"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                LOGIN
              </Button>

              <Form.Group className="mt-3 text-center">
                <p>
                  Forgot Password?{" "}
                  <NavLink to="/reset" className="text-decoration-none fw-bold">
                    RESET
                  </NavLink>
                </p>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
