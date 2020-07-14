import React from "react";
import { AlgProvider } from "./components/context/AlgContext";
import Header from "./components/header/Header";
import Controls from "./components/controls/Controls";

function App() {
  return (
    <AlgProvider>
      <Header />
      <Controls />
    </AlgProvider>
  );
}

export default App;
