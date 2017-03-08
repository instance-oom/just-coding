// https://leetcode.com/problems/excel-sheet-column-title/?tab=Description

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  if (!n) return '';
  var result = '';
  var tempData = n % 26;
  if (tempData === 0) {
    result = 'Z' + result;
    n = n / 26 - 1;
  } else {
    result = String.fromCharCode(tempData + 64) + result;
    n = Math.floor(n / 26);
  }
  result = convertToTitle(n) + result;
  return result;
};

var convertToTitle2 = function (n) {
  var result = '';
  while (n) {
    result = String.fromCharCode(((n - 1) % 26 + 65)) + result;
    n = Math.floor((n - 1) / 26);
  }
  return result;
};

for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 1000);
  console.log(`${num} -> ${convertToTitle2(num)}`);
}