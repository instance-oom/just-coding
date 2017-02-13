let bubbleSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  let tempArr = arr.concat();
  let length = tempArr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (tempArr[i] > tempArr[j]) {
        let temp = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = temp;
      }
    }
  }
  return tempArr;
}

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.time('sortTime');
let sortedArr = bubbleSort(arr);
console.timeEnd('sortTime');
console.log(`Old Array: ${arr}`);
console.log(`Sorted Array: ${sortedArr}`);