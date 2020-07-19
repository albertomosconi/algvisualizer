import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AlgContext } from "../context/AlgContext";

const genList = (size, min, max) => {
  return [...Array(size)].map((_) => ({
    val: Math.floor(Math.random() * (max - min + 1) + min),
    col: "black",
  }));
};

const SortingCanvas = () => {
  const BARWIDTH = 10;
  const {
    algs,
    currentAlg,
    reset,
    setReset,
    sorting,
    setSorting,
    setSorted,
  } = useContext(AlgContext);
  const [list, setList] = useState([]);

  const animateList = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        setList(animations[i]);
      }, i * 10);
    }
  };

  useEffect(() => {
    if (reset === 1) {
      setSorting(0);
      setList(
        genList(
          Math.floor((window.innerWidth * 0.8) / (1 + BARWIDTH)),
          5,
          window.innerHeight * 0.7
        )
      );
      setReset(0);
      setSorted(0);
    }
  }, [reset, setReset, setSorted]);

  useEffect(() => {
    if (sorting === 1) {
      let animations = algs[currentAlg].sortAlg(list);
      animateList(animations);
      setSorting(0);
      setSorted(1);
    }
  }, [sorting, algs, currentAlg, setSorted, setSorting]);

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
              height: el.val,
              background: el.col,
              margin: 1,
              display: "inline-block",
            }}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default SortingCanvas;
