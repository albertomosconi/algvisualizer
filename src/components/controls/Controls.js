import React, { useContext } from "react";
import "./style.css";
import { AlgContext } from "../context/AlgContext";
import {
  Container,
  Navbar,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";

const Controls = () => {
  const { algs, setCurrentAlg, setReset } = useContext(AlgContext);
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
            <Dropdown.Item
              onClick={(e) => {
                setCurrentAlg(i);
                setReset(1);
              }}
              key={i}
            >
              {alg.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Button variant="primary">Sort</Button>
        <Button
          variant="danger"
          onClick={() => {
            setReset(1);
          }}
        >
          Reset
        </Button>
      </Container>
    </Navbar>
  );
};

export default Controls;
