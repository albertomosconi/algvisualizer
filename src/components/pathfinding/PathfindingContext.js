import React, { createContext, useState } from "react";
import { aStar } from "../../algorithms/pathfinding";

export const PathfindingContext = createContext();

export const PathfindingProvider = ({ children }) => {
  const [algs, setAlgs] = useState([
    {
      name: "A Star",
      ref: "https://en.wikipedia.org/wiki/A*_search_algorithm",
      sketch: aStar,
    },
  ]);
  const [currentAlg, setCurrentAlg] = useState(0);
  return (
    <PathfindingContext.Provider
      value={{ algs, setAlgs, currentAlg, setCurrentAlg }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};
