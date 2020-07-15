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
  const { algs, setCurrentAlg, setReset, setSorting } = useContext(AlgContext);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        paddingBottom: 10,
      }}
    >
      <DropdownButton
        as={ButtonGroup}
        id={"dropdown-button-drop-up"}
        drop={"up"}
        variant="secondary"
        title={"Algorithm"}
        className="pr-1"
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
      <span style={{ width: 10 }} />
      <Button
        variant="primary"
        onClick={() => {
          setSorting(1);
        }}
      >
        Sort
      </Button>
      <span style={{ width: 10 }} />
      <Button
        variant="danger"
        onClick={() => {
          setReset(1);
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default Controls;
