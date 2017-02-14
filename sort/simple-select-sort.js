let simpleSelectSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Args is not an array.');
  }
  let tempArr = arr.concat();
  let length = tempArr.length;

  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i; j < length - 1; j++) {
      if (tempArr[j] < tempArr[min]) min = j;
    }
    if (min !== i) {
      let temp = tempArr[i];
      tempArr[i] = tempArr[min];
      tempArr[min] = temp;
    }
  }

  return tempArr;
}

let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.time('sortTime');
let sortedArr = simpleSelectSort(arr);
console.timeEnd('sortTime');
console.log(`Old Array: ${arr}`);
console.log(`Sorted Array: ${sortedArr}`);