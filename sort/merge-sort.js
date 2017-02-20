let mergeSort = (arr, low, high) => {
  if (low === null || low === undefined) low = 0;
  if (high === null || high === undefined) high = arr.length - 1;
  let mid = Math.floor((low + high) / 2);
  if (low < high) {
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
  return arr;
}

let merge = (arr, low, mid, high) => {
  let temp = [];
  let i = low;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      i++;
    } else {
      temp[k] = arr[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }

  while (j <= high) {
    temp[k] = arr[j];
    j++;
    k++;
  }

  for (let i = low, j = 0; i <= high; i++ , j++) {
    arr[i] = temp[j];
  }
}

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.time('sortTime');
let sortedArr = mergeSort(arr);
console.timeEnd('sortTime');
console.log(`Old Array: ${arr}`);
console.log(`Sorted Array: ${sortedArr}`);