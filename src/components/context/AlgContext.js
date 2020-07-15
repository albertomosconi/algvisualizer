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
    {
      name: "Quicksort",
      complexity: "O(n^2)",
      sort: (list) => quickSort(list),
    },
    {
      name: "Shellsort",
      complexity: "O(n^2)",
      sort: (list) => shellSort(list),
    },
    {
      name: "Bubble Sort",
      complexity: "O(n^2)",
      sort: (list) => bubbleSort(list),
    },
    {
      name: "Comb Sort",
      complexity: "O(n^2)",
      sort: (list) => combSort(list),
    },
    {
      name: "Counting Sort",
      complexity: "O(n+k)",
      sort: (list) => countingSort(list),
    },
    {
      name: "Bucket Sort",
      complexity: "O(n^2)",
      sort: (list) => bucketSort(list),
    },
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
