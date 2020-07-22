import React, { useRef, useState, useEffect, useContext } from "react";
import p5 from "p5";
import { Container } from "react-bootstrap";
import { PathfindingContext } from "./PathfindingContext";

const PathfindingCanvas = () => {
  const p5canvas = useRef();
  const [myP5, setMyP5] = useState();
  const { algs, currentAlg } = useContext(PathfindingContext);

  useEffect(() => {
    let div;
    if ((div = document.getElementById("defaultCanvas0")))
      div.parentNode.removeChild(div);
    setMyP5(new p5(algs[currentAlg].sketch, p5canvas.current));
  }, [currentAlg, algs]);

  return (
    <Container
      fluid
      style={{
        height: Math.min(window.innerHeight - 125, window.innerWidth - 30),
        width: Math.min(window.innerHeight - 125, window.innerWidth),
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "black",
        }}
        ref={p5canvas}
      />
    </Container>
  );
};

export default PathfindingCanvas;
