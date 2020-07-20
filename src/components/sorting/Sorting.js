import React from "react";
import SortingCanvas from "./SortingCanvas";
import { SortingProvider, SortingContext } from "./SortingContext";
import SortingControls from "./SortingControls";
import Header from "../general/Header";

const Sorting = () => {
  return (
    <SortingProvider>
      <Header context={SortingContext} />
      <SortingCanvas />
      <SortingControls />
    </SortingProvider>
  );
};

export default Sorting;
