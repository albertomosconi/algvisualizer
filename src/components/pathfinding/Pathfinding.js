import React from "react";
import { PathfindingContext, PathfindingProvider } from "./PathfindingContext";
import Header from "../general/Header";
import PathfindingCanvas from "./PathfindingCanvas";
import PathfindingControls from "./PathfindingControls";

const Pathfinding = () => {
  return (
    <PathfindingProvider>
      <Header context={PathfindingContext} />
      <PathfindingCanvas />
      <PathfindingControls />
    </PathfindingProvider>
  );
};

export default Pathfinding;
