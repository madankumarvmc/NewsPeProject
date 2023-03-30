import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "#F2F2F2", height: "100vh", overflow: "hidden" }}
      className="position-fixed w-100 h-100 overflow-hidden"
    >
      <Container
        style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <div className="text-center mb-5">
              <h1>Enter News Article URL</h1>
            </div>
            <Form>
              <Form.Group style={{ position: "relative" }}>
                <Form.Control type="text" placeholder="Enter URL" />
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "10px",
                  }}
                >
                  Read Article
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
