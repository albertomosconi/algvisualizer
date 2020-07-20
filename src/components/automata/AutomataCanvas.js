import React, { useRef, useState, useEffect, useContext } from "react";
import p5 from "p5";
import { Container } from "react-bootstrap";
import { AutomataContext } from "./AutomataContext";

const AutomataCanvas = () => {
  const p5canvas = useRef();
  const [myP5, setMyP5] = useState();
  const { algs, currentAlg } = useContext(AutomataContext);

  useEffect(() => {
    let div;
    if ((div = document.getElementById("defaultCanvas0")))
      div.parentNode.removeChild(div);
    setMyP5(new p5(algs[currentAlg].sketch, p5canvas.current));
  }, [currentAlg]);

  return (
    <Container fluid style={{ height: window.innerHeight * 0.75 }}>
      <div
        style={{ height: "100%", backgroundColor: "black" }}
        ref={p5canvas}
      />
    </Container>
  );
};

export default AutomataCanvas;
