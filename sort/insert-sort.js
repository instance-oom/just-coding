let insertSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  let tempArr = arr.concat();
  let length = tempArr.length;

  for (let i = 1; i < length; i++) {
    let temp = tempArr[i];

    let j = i - 1;
    while (j >= 0 && temp < tempArr[j]) {
      tempArr[j + 1] = tempArr[j];
      j--;
    }
    tempArr[j + 1] = temp;
  }

  return tempArr;
}

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.time('sortTime');
let sortedArr = insertSort(arr);
console.timeEnd('sortTime');
console.log(`Old Array: ${arr}`);
console.log(`Sorted Array: ${sortedArr}`);