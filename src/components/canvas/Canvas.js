import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AlgContext } from "../context/AlgContext";
// import countingSort from "../../algorithms/countingSort";

const genList = (size, min, max) => {
  return [...Array(size)].map((_) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

const Canvas = () => {
  const BARWIDTH = 2;
  const { algs, currentAlg, reset, setReset, sorting, setSorting } = useContext(
    AlgContext
  );
  const [list, setList] = useState([]);

  useEffect(() => {
    if (reset === 0) {
      setSorting(0);
      setList(
        genList(
          Math.floor((window.innerWidth * 0.6) / (2 * BARWIDTH)),
          5,
          window.innerHeight * 0.7
        )
      );
    }
    setReset(0);
  }, [reset, setReset, setSorting]);

  useEffect(() => {
    if (sorting === 1) {
      setList((list) => algs[currentAlg].sort(list));
      setSorting(0);
    }
  }, [sorting, setSorting]);

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
              margin: Math.min(BARWIDTH, 10),
              display: "inline-block",
            }}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default Canvas;
