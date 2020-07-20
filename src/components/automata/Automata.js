import React from "react";
import AutomataCanvas from "./AutomataCanvas";
import { AutomataProvider, AutomataContext } from "./AutomataContext";
import Header from "../general/Header";

const Automata = () => {
  return (
    <AutomataProvider>
      <Header context={AutomataContext} />
      {/* <AutomataHeader /> */}
      <AutomataCanvas />
    </AutomataProvider>
  );
};

export default Automata;
