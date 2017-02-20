let quickSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  let pivotKey = Math.floor(arr.length / 2);
  let pivot = arr[pivotKey];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotKey) continue;
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  if (leftArr.length > 1) {
    leftArr = quickSort(leftArr);
  }
  if (rightArr.length > 1) {
    rightArr = quickSort(rightArr);
  }
  let sortedArr = [].concat(leftArr, [pivot], rightArr);
  return sortedArr;
}

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.time('sortTime');
let sortedArr = quickSort(arr);
console.timeEnd('sortTime');
console.log(`Old Array: ${arr}`);
console.log(`Sorted Array: ${sortedArr}`);