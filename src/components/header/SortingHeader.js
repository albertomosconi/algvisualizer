import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AlgContext } from "../context/AlgContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SortingHeader = () => {
  const { algs, currentAlg } = useContext(AlgContext);
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <h3
            style={
              {
                //   verticalAlign: "middle",
              }
            }
          >
            <Link to="/">
              <FontAwesomeIcon
                style={{
                  color: "white",
                  fontSize: "1.6rem",
                  paddingBottom: 1,
                  marginRight: 10,
                }}
                icon={faHome}
              />
            </Link>

            {algs[currentAlg].name}
          </h3>
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

export default SortingHeader;
