import React, { useState, useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../styles/NavigationBar.css";
import ModalLogin from "./ModalLogin";
import appcontext from "../context/app-context";

const NavigationBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { isAuth, doLogout, user } = useContext(appcontext);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Navbar variant="dark" fixed="top">
      <ModalLogin handleShowLogin={handleShowLogin} show={showLogin} />

      <Container className="mt-2">
        <Navbar.Brand href="#home">QUIZZ APP</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">New Exam</Nav.Link>
          <NavDropdown
            title={isAuth && user.firstName}
            id="collasible-nav-dropdown"
          >
            {!isAuth && (
              <NavDropdown.Item
                onClick={() => setShowLogin(!showLogin)}
                href="#action/3.1"
              >
                Login
              </NavDropdown.Item>
            )}
            <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
            {isAuth && (
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            )}
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
