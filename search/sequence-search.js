let sequenceSearch = (arr, key) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  if (!key) {
    throw new Error('Key is null or undefined.');
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(parseInt(Math.random() * 100));
}
let index = Math.floor(Math.random() * 19);
let key = arr[index];
console.time('Search Time');
let findIndex = sequenceSearch(arr, key);
console.timeEnd('Search Time');
console.log(`Array: ${arr}, Index: ${index}, Key:${key}`);
console.log(`Find Index: ${findIndex}`);