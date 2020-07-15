import React, { useContext } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { AlgContext } from "../context/AlgContext";
import "./style.css";

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
      >
        {algs.map((alg, i) => (
          <Dropdown.Item
            onClick={(e) => {
              setCurrentAlg(i);
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
