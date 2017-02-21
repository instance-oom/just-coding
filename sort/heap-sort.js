let buildMaxHeap = (arr) => {
  let i = Math.floor(arr.length / 2) - 1;
  for (i; i >= 0; i--) {
    heapAdjust(arr, i, arr.length);
  }
}

let heapAdjust = (arr, currentIndex, length) => {
  let largest = currentIndex;
  let left = 2 * currentIndex + 1;
  let right = 2 * currentIndex + 2;
  if (left < length && arr[largest] < arr[left]) {
    largest = left;
  }
  if (right < length && arr[largest] < arr[right]) {
    largest = right;
  }
  if (largest !== currentIndex) {
    swap(arr, currentIndex, largest);
    heapAdjust(arr, largest, length);
  }
}

let swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

let heapSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  buildMaxHeap(arr);
  let i = arr.length - 1;
  for (i; i > 0; i--) {
    swap(arr, 0, i);
    heapAdjust(arr, 0, i);
  }
  return arr;
}

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log(`Old Array: ${arr}`);
console.time('sortTime');
heapSort(arr);
console.timeEnd('sortTime');
console.log(`Sorted Array: ${arr}`);