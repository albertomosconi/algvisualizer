// INSERTION SORT
export const insertionSort = (list) => {
  for (let i = 1; i < list.length; i++) {
    let j = i - 1;
    let tmp = list[i];
    while (j >= 0 && list[j] > tmp) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = tmp;
  }
  return list;
};

// SELECTION SORT
export const selectionSort = (list) => {
  const left = 0;
  const right = list.length;

  for (var i = left; i < right; ++i) {
    var min = i;
    for (var j = i; j < right; ++j) {
      if (list[min] > list[j]) {
        min = j;
      }
    }
    [list[min], list[i]] = [list[i], list[min]];
  }
  return list;
};

// MERGE SORT
export const mergeSort = (list) => {
  // No need to sort the array if the array only has one element or empty
  if (list.length <= 1) {
    return list;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(list.length / 2);

  // This is where we will be dividing the array into left and right
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
};

// Merge the two arrays: left and right
const merge = (left, right) => {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

// HEAPSORT
export const heapSort = (list) => {
  heapify(list, list.length);

  for (var i = list.length - 1; i > 0; i--) {
    [list[i], list[0]] = [list[0], list[i]];
    max_heapify(list, 0, i - 1);
  }
  return list;
};

function heapify(a, length) {
  for (var i = Math.floor(length / 2); i >= 0; i--) {
    max_heapify(a, i, length);
  }
}

function max_heapify(a, i, length) {
  while (true) {
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest = i;

    if (left < length && a[left] > a[largest]) {
      largest = left;
    }

    if (right < length && a[right] > a[largest]) {
      largest = right;
    }

    if (i === largest) {
      break;
    }

    [a[i], a[largest]] = [a[largest], a[i]];
    i = largest;
  }
}

// COUNTING SORT
export const countingSort = (list) => {
  // initialize useful values
  const max = Math.max(...list);
  const min = Math.min(...list);
  const offset = Math.abs(min);
  const range = max + offset + 1;

  // initilize counting and output array
  const count = new Array(range).fill(0);
  const output = [];

  // count the occurrences of each element
  list.forEach((num) => {
    count[num + offset] += 1;
  });

  // in order add to the output each element from the count array
  for (let num = min; num <= max; num += 1) {
    while (count[num + offset] > 0) {
      output.push(num);
      count[num + offset] -= 1;
    }
  }
  return output;
};
