import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export const login = () => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={3}
            xl={8}
            style={{
              backgroundColor: "#f2f2f2",
              padding: "20px",
              marginTop: "60px",
              maxWidth: "500px",
            }}
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Username or Email" />
                <Form.Text className="text-muted">
                  We Will never share your email with anyone else. 
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  LOGIN
                </Button>
                <p>Forget Password?</p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default login;
