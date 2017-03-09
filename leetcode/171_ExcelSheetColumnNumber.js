// https://leetcode.com/problems/excel-sheet-column-number/?tab=Description

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  var num = 0;
  var length = s.length;
  for (var i = 0; i < length; i++) {
    num += ((s[i]).charCodeAt(0) - 64) * Math.pow(26, length - i - 1);
  }
  return num;
};

console.log(`A(1) -> ${titleToNumber('A')}`);
console.log(`Z(26) -> ${titleToNumber('Z')}`);
console.log(`ZZ(702) -> ${titleToNumber('ZZ')}`);
console.log(`GF(188) -> ${titleToNumber('GF')}`);
console.log(`ACV(776) -> ${titleToNumber('ACV')}`);