import React, { createContext, useState } from "react";
import {
  insertionSort,
  selectionSort,
  //   mergeSort,
  //   heapSort,
  //   quickSort,
  //   shellSort,
  //   bubbleSort,
  //   combSort,
  //   countingSort,
  //   bucketSort,
} from "../../algorithms/sorting";

export const AlgContext = createContext();

export const AlgProvider = ({ children }) => {
  const [algs, setAlgs] = useState([
    {
      name: "Insertion Sort",
      complexity: "O(n^2)",
      sortAlg: (list) => insertionSort(list),
      ref: "https://en.wikipedia.org/wiki/Insertion_sort",
    },
    {
      name: "Selection Sort",
      complexity: "O(n^2)",
      sortAlg: (list) => selectionSort(list),
      ref: "https://en.wikipedia.org/wiki/Selection_sort",
    },
    // {
    //   name: "Merge Sort",
    //   complexity: "O(nlogn)",
    //   sortAlg: (list) => mergeSort(list),
    // ref: "https://en.wikipedia.org/wiki/Merge_sort",
    // },
    // {
    //   name: "Heapsort",
    //   complexity: "O(nlogn)",
    //   sortAlg: (list) => heapSort(list),
    // ref: "https://en.wikipedia.org/wiki/Heap_sort",
    // },
    // {
    //   name: "Quicksort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => quickSort(list),
    // ref: "https://en.wikipedia.org/wiki/Quick_sort",
    // },
    // {
    //   name: "Shellsort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => shellSort(list),
    // ref: "https://en.wikipedia.org/wiki/Shell_sort",
    // },
    // {
    //   name: "Bubble Sort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => bubbleSort(list),
    // ref: "https://en.wikipedia.org/wiki/Bubble_sort",
    // },
    // {
    //   name: "Comb Sort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => combSort(list),
    //  ref: "https://en.wikipedia.org/wiki/Comb_sort",
    // },
    // {
    //   name: "Counting Sort",
    //   complexity: "O(n+k)",
    //   sortAlg: (list) => countingSort(list),
    // ref: "https://en.wikipedia.org/wiki/Counting_sort",
    // },
    // {
    //   name: "Bucket Sort",
    //   complexity: "O(n^2)",
    //   sortAlg: (list) => bucketSort(list),
    // ref: "https://en.wikipedia.org/wiki/Bucket_sort",
    // },
  ]);
  const [currentAlg, setCurrentAlg] = useState(1);
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
