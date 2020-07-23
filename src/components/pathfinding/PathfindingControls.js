import { faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { PathfindingContext } from "./PathfindingContext";

const PathfindingControls = () => {
  const { algs, currentAlg, setCurrentAlg, setRefresh } = useContext(
    PathfindingContext
  );

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
            className={i === currentAlg ? "bg-primary text-light" : ""}
          >
            <strong>{alg.name}</strong>
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <span style={{ width: 10 }} />
      <Button onClick={() => setRefresh(Math.random())}>
        <FontAwesomeIcon icon={faSync} />
      </Button>
    </div>
  );
};

export default PathfindingControls;
