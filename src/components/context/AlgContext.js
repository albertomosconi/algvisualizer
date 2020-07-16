import React, { createContext, useState } from "react";
import {
  insertionSort,
  selectionSort,
  mergeSort,
  heapSort,
  quickSort,
  shellSort,
  bubbleSort,
  combSort,
  countingSort,
  bucketSort,
} from "../../algorithms/sorting";

export const AlgContext = createContext();

export const AlgProvider = ({ children }) => {
  const [algs, setAlgs] = useState([
    {
      name: "Insertion Sort",
      complexity: "O(n^2)",
      sortAlg: (list) => insertionSort(list),
    },
    // {
    //   name: "Selection Sort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => selectionSort(list),
    // },
    // {
    //   name: "Merge Sort",
    //   complexity: "O(nlogn)",
    //   sortAlg: (list) => mergeSort(list),
    // },
    // {
    //   name: "Heapsort",
    //   complexity: "O(nlogn)",
    //   sortAlg: (list) => heapSort(list),
    // },
    // {
    //   name: "Quicksort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => quickSort(list),
    // },
    // {
    //   name: "Shellsort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => shellSort(list),
    // },
    // {
    //   name: "Bubble Sort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => bubbleSort(list),
    // },
    // {
    //   name: "Comb Sort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => combSort(list),
    // },
    // {
    //   name: "Counting Sort",
    //   complexity: "O(n+k)",
    //   sortAlg: (list) => countingSort(list),
    // },
    // {
    //   name: "Bucket Sort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => bucketSort(list),
    // },
  ]);
  const [currentAlg, setCurrentAlg] = useState(0);
  const [reset, setReset] = useState(1);
  const [sorting, setSorting] = useState(0);
  const [sorted, setSorted] = useState(0);

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
        sorted,
        setSorted,
      }}
    >
      {children}
    </AlgContext.Provider>
  );
};
