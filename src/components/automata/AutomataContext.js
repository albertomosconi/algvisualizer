import React, { createContext, useState } from "react";

export const AutomataContext = createContext();

export const AutomataProvider = ({ children }) => {
  const [algs, setAlgs] = useState([
    {
      name: "Game of Life",
      ref: "https://en.wikipedia.org/wiki/Game_of_life",
    },
  ]);
  const [currentAlg, setCurrentAlg] = useState(0);

  return (
    <AutomataContext.Provider
      value={{ algs, setAlgs, currentAlg, setCurrentAlg }}
    >
      {children}
    </AutomataContext.Provider>
  );
};
