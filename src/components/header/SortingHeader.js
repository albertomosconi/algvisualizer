import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AlgContext } from "../context/AlgContext";

const SortingHeader = () => {
  const { algs, currentAlg } = useContext(AlgContext);
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <h3>
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
            <Nav.Link href={algs[currentAlg].ref} target="_blank">
              Wikipedia
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SortingHeader;
