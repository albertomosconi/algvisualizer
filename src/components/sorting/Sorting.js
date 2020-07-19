import React from "react";
import SortingCanvas from "../canvas/SortingCanvas";
import { AlgProvider } from "../context/AlgContext";
import SortingControls from "../controls/SortingControls";
import SortingHeader from "../header/SortingHeader";

const Sorting = () => {
  return (
    <AlgProvider>
      <SortingHeader />
      <SortingCanvas />
      <SortingControls />
    </AlgProvider>
  );
};

export default Sorting;
