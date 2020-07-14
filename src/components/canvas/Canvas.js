import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AlgContext } from "../context/AlgContext";

const genList = (size, min, max) => {
  return [...Array(size)].map((_) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

const Canvas = () => {
  const BARWIDTH = 2;
  const { currentAlg } = useContext(AlgContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(window.innerWidth);
    setList(
      genList(
        Math.floor((window.innerWidth * 0.6) / (2 * BARWIDTH)),
        5,
        window.innerHeight * 0.7
      )
    );
  }, [currentAlg]);

  return (
    <Container fluid>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {list.map((el, i) => (
          <div
            key={i}
            style={{
              width: BARWIDTH,
              height: el,
              background: "#121212",
              margin: 2,
              display: "inline-block",
            }}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default Canvas;
