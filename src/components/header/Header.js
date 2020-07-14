import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AlgContext } from "../context/AlgContext";

const Header = () => {
  const { algs, currentAlg } = useContext(AlgContext);
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <h3>{algs[currentAlg].name}</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="https://www.github.com/albertomosconi/algvisualizer"
              target="_blank"
            >
              Source Code
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
