import React, { useContext } from "react";
import { AlgContext } from "../context/AlgContext";
import {
  Container,
  Navbar,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";

const Controls = () => {
  const { algs, setCurrentAlg } = useContext(AlgContext);
  return (
    <Navbar fixed="bottom" bg="light">
      <Container>
        <DropdownButton
          as={ButtonGroup}
          id={"dropdown-button-drop-up"}
          drop={"up"}
          variant="secondary"
          title={"Select Algorithm"}
        >
          {algs.map((alg, i) => (
            <Dropdown.Item onClick={(e) => setCurrentAlg(i)} key={i}>
              {alg.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Container>
    </Navbar>
  );
};

export default Controls;
