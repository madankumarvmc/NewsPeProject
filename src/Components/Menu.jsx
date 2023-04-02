import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container style={{ color: "black" }}>
          <Navbar.Brand href="/">NewsPe</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/aboutus">AboutUs</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default menu;
