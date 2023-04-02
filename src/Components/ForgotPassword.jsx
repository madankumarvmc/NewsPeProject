import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export const ForgotPassword = () => {
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
            <h3 className="text-center mb-4">Forgot Password</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll send you a password reset link.
                </Form.Text>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Send
                </Button>
                <div className="text-center mt-3">
                  <Link to="/login" className="text-muted">
                    Back to Login
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

export default ForgotPassword;
