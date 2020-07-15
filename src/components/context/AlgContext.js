import React, { createContext, useState } from "react";

export const AlgContext = createContext();

export const AlgProvider = ({ children }) => {
  const [algs, setAlgs] = useState([
    { name: "Insertion Sort", complexity: "O(n^2)" },
    { name: "Selection Sort", complexity: "O(n^2)" },
    { name: "Merge Sort", complexity: "O(nlogn)" },
    { name: "Heapsort", complexity: "O(nlogn)" },
    { name: "Quicksort", complexity: "O(n^2)" },
    { name: "Shellsort", complexity: "O(n^2)" },
    { name: "Bubble Sort", complexity: "O(n^2)" },
    { name: "Comb Sort", complexity: "O(n^2)" },
    { name: "Counting Sort", complexity: "O(n+k)" },
    { name: "Bucket Sort", complexity: "O(n^2)" },
    { name: "Radix Sort", complexity: "O(wn)" },
  ]);
  const [currentAlg, setCurrentAlg] = useState(0);
  const [reset, setReset] = useState(0);
  const [sorting, setSorting] = useState(0);

  return (
    <AlgContext.Provider
      value={{
        algs,
        setAlgs,
        currentAlg,
        setCurrentAlg,
        reset,
        setReset,
        sorting,
        setSorting,
      }}
    >
      {children}
    </AlgContext.Provider>
  );
};
