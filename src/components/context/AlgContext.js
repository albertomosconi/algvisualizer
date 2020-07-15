import React, { createContext, useState } from "react";
import {
  insertionSort,
  countingSort,
  selectionSort,
  mergeSort,
  heapSort,
} from "../../algorithms/sorting";

export const AlgContext = createContext();

export const AlgProvider = ({ children }) => {
  const [algs, setAlgs] = useState([
    {
      name: "Insertion Sort",
      complexity: "O(n^2)",
      sort: (list) => insertionSort(list),
    },
    {
      name: "Selection Sort",
      complexity: "O(n^2)",
      sort: (list) => selectionSort(list),
    },
    {
      name: "Merge Sort",
      complexity: "O(nlogn)",
      sort: (list) => mergeSort(list),
    },
    {
      name: "Heapsort",
      complexity: "O(nlogn)",
      sort: (list) => heapSort(list),
    },
    // { name: "Quicksort", complexity: "O(n^2)" },
    // { name: "Shellsort", complexity: "O(n^2)" },
    // { name: "Bubble Sort", complexity: "O(n^2)" },
    // { name: "Comb Sort", complexity: "O(n^2)" },
    {
      name: "Counting Sort",
      complexity: "O(n+k)",
      sort: (list) => countingSort(list),
    },
    // { name: "Bucket Sort", complexity: "O(n^2)" },
    // { name: "Radix Sort", complexity: "O(wn)" },
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
