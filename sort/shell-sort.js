let shellSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  let tempArr = arr.concat();
  let length = tempArr.length;

  let step = Math.floor(length / 2);
  while (step >= 1) {
    for (let i = step; i < length; i++) {
      let temp = tempArr[i];
      let j = i - step
      for (j; j >= 0 && temp < tempArr[j]; j = j - step) {
        tempArr[j + step] = tempArr[j];
      }
      tempArr[j + step] = temp;
    }
    step = Math.floor(step / 2);
  }

  return tempArr;
}

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.time('sortTime');
let sortedArr = shellSort(arr);
console.timeEnd('sortTime');
console.log(`Old Array: ${arr}`);
console.log(`Sorted Array: ${sortedArr}`);