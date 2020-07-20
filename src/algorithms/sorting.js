const deepCopy = (list) => {
  let copy = [];
  for (let i = 0; i < list.length; i++) {
    copy.push({ val: list[i].val, col: list[i].col });
  }
  return copy;
};

// INSERTION SORT
export const insertionSort = (input) => {
  let array = deepCopy(input);
  let animations = [];
  let i, j;
  for (i = 1; i < array.length; i++) {
    array[i].col = "success";
    animations.push([...deepCopy(array)]);
    j = i - 1;
    let tmp = array[i].val;
    while (j >= 0 && array[j].val > tmp) {
      array[j].col = "danger";
      array[j + 1].col = "danger";
      animations.push([...deepCopy(array)]);

      [array[j + 1], array[j]] = [array[j], array[j + 1]];
      animations.push([...deepCopy(array)]);
      if (j + 1 === i) array[i].col = "success";
      else array[j + 1].col = "dark";
      animations.push([...deepCopy(array)]);
      j--;
    }
    array[j + 1].col = "danger";
    array[j + 1].val = tmp;
    animations.push([...deepCopy(array)]);
    array[j + 1].col = "dark";
    array[i].col = "dark";
  }
  array[j].col = "dark";
  animations.push([...deepCopy(array)]);
  return animations;
};

// SELECTION SORT
export const selectionSort = (input) => {
  let array = [...deepCopy(input)];
  let animations = [];
  const left = 0;
  const right = array.length;

  for (var i = left; i < right; ++i) {
    var min = i;
    array[i].col = "success";
    animations.push([...deepCopy(array)]);

    for (var j = i; j < right; ++j) {
      if (j !== min) {
        array[j].col = "danger";
        if (j !== min + 1) array[j - 1].col = "dark";
        animations.push([...deepCopy(array)]);
      }

      if (array[min].val > array[j].val) {
        array[j].col = "success";
        // animations.push([...deepCopy(array)]);
        if (min !== i) array[min].col = "dark";
        animations.push([...deepCopy(array)]);
        min = j;
      }
    }

    if (j === right && j - 1 !== min) array[j - 1].col = "dark";

    [array[min], array[i]] = [array[i], array[min]];
    animations.push([...deepCopy(array)]);
    animations.push([...deepCopy(array)]);
    array[min].col = "dark";
    array[i].col = "dark";
    animations.push([...deepCopy(array)]);
  }
  return animations;
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

// QUICKSORT
export const quickSort = (list) => {
  if (list.length <= 1) return list;
  else {
    let left = [];
    let right = [];
    let newList = [];
    let pivot = list.pop();

    for (let i = 0; i < list.length; i++) {
      if (list[i] <= pivot) left.push(list[i]);
      else right.push(list[i]);
    }

    return newList.concat(quickSort(left), pivot, quickSort(right));
  }
};

// SHELLSORT
export const shellSort = (list) => {
  let gap = list.length / 2;
  while (gap > 0) {
    for (let i = gap; i < list.length; i++) {
      let j = i;
      let temp = list[i];

      while (j >= gap && list[j - gap] > temp) {
        list[j] = list[j - gap];
        j = j - gap;
      }
      list[j] = temp;
    }
    if (gap === 2) {
      gap = 1;
    } else {
      gap = parseInt((gap * 5) / 11);
    }
  }
  return list;
};

// BUBBLE SORT
export const bubbleSort = (list) => {
  let len = list.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  return list;
};

// COMB SORT
export const combSort = (list) => {
  let gap = list.length;
  let shrink = 1.3;
  let sorted = false;

  while (sorted === false) {
    gap = Math.floor(gap / shrink);
    if (gap <= 1) {
      gap = 1;
      sorted = true;
    }

    for (let i = 0; i + gap < list.length; i++) {
      if (list[i] > list[i + gap]) {
        [list[i], list[i + gap]] = [list[i + gap], list[i]];
        sorted = false;
      }
    }
  }
  return list;
};

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

// BUCKET SORT
export const bucketSort = (list) => {
  let k = 10; // number of buckets
  let buckets = new Array(k);
  for (let i = 0; i < k; i++) {
    buckets[i] = [];
  }
  let max = Math.max(...list);

  for (let i = 0; i < list.length; i++) {
    if (list[i] === max) buckets[k - 1].push(max);
    else buckets[Math.floor((k * list[i]) / max)].push(list[i]);
  }

  let output = [];
  for (let i = 0; i < k; i++) {
    insertionSort(buckets[i]);
    output = [...output, ...buckets[i]];
  }

  return output;
};
