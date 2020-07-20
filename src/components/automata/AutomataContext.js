import React, { createContext, useState } from "react";
import { rule30, rule90, rule110, rule184 } from "../../algorithms/automata";

export const AutomataContext = createContext();

export const AutomataProvider = ({ children }) => {
  const [algs, setAlgs] = useState([
    {
      name: "Rule 30",
      ref: "https://en.wikipedia.org/wiki/Rule_30",
      sketch: rule30,
    },
    {
      name: "Rule 90",
      ref: "https://en.wikipedia.org/wiki/Rule_90",
      sketch: rule90,
    },
    {
      name: "Rule 110",
      ref: "https://en.wikipedia.org/wiki/Rule_110",
      sketch: rule110,
    },
    {
      name: "Rule 184",
      ref: "https://en.wikipedia.org/wiki/Rule_184",
      sketch: rule184,
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
