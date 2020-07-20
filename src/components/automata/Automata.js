import React from "react";
import AutomataCanvas from "./AutomataCanvas";
import AutomataControls from "./AutomataControls";
import { AutomataProvider, AutomataContext } from "./AutomataContext";
import Header from "../general/Header";

const Automata = () => {
  return (
    <AutomataProvider>
      <Header context={AutomataContext} />
      <AutomataCanvas />
      <AutomataControls />
    </AutomataProvider>
  );
};

export default Automata;
