let fibonacci = (maxValue) => {
  let fibonacciArr = [0, 1];
  let i = 2;
  while (true) {
    fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    if (fibonacciArr[i] - 1 > maxValue) break;
    i++;
  }
  return fibonacciArr;
}

let fibonacciSearch = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  if (!key) {
    throw new Error('Key is null or undefined.');
  }
  let low = 0;
  let high = arr.length - 1;

  let fibonacciArr = fibonacci(arr.length);
  let k = fibonacciArr.length - 1;
  let temp = arr.concat();
  for (let i = arr.length; i < fibonacciArr[k] - 1; i++) {
    temp[i] = arr[arr.length - 1];
  }

  while (low <= high) {
    let mid = low + fibonacciArr[k - 1] - 1;
    if (key === temp[mid]) {
      if (mid < arr.length) return mid;
      return arr.length - 1;
    }
    if (key > temp[mid]) {
      low = mid + 1;
      k -= 2;
    } else {
      high = mid - 1;
      k -= 1;
    }
  }
}

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(parseInt(Math.random() * 100));
}
arr.sort((item1, item2) => {
  return item1 > item2 ? 1 : -1;
});
let index = Math.floor(Math.random() * 20);
let key = arr[index];
console.time('Search Time');
let findIndex = fibonacciSearch(arr, key);
console.timeEnd('Search Time');
console.log(`Array: ${arr}, Index: ${index}, Key:${key}`);
console.log(`Find Index: ${findIndex}`);