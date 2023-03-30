import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export const login = () => {
  return (
    <div style={{ backgroundColor: "#F2F2F2", height: "100vh" }}>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={4}
            style={{
              backgroundColor: "#FFFFFF",
              padding: "40px",
              marginTop: "60px",
              borderRadius: "10px",
            }}
          >
            <h3 className="text-center mb-4">Login</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <div className="text-center mt-3">
                  <Button variant="outline-secondary" className="me-2">
                    Google
                  </Button>
                  <Button variant="outline-secondary">Twitter</Button>
                </div>
                <div className="text-center mt-3">
                  <Link to="/forgot-password" className="text-muted">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default login;
