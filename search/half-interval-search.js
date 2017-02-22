let halfIntervalSearch = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  if (!key) {
    throw new Error('Key is null or undefined.');
  }
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(parseInt(Math.random() * 100));
}
arr.sort((item1, item2) => {
  return item1 > item2 ? 1 : -1;
});
let index = Math.floor(Math.random() * 19);
let key = arr[index];
console.time('Search Time');
let findIndex = halfIntervalSearch(arr, key);
console.timeEnd('Search Time');
console.log(`Array: ${arr}, Index: ${index}, Key:${key}`);
console.log(`Find Index: ${findIndex}`);