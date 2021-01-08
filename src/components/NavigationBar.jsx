import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar variant="dark" fixed="top">
      <Container className="mt-2">
        <Navbar.Brand href="#home">QUIZZ APP</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">New Exam</Nav.Link>
          <NavDropdown title="User" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">My Exams</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav></Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
