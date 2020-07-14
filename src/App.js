import React from "react";
import Canvas from "./components/canvas/Canvas";
import { AlgProvider } from "./components/context/AlgContext";
import Controls from "./components/controls/Controls";
import Header from "./components/header/Header";

function App() {
  return (
    <AlgProvider>
      <Header />
      <Canvas />
      <Controls />
    </AlgProvider>
  );
}

export default App;
