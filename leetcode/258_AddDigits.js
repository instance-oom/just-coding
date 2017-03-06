// https://leetcode.com/problems/add-digits/?tab=Description

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  var sum = 0;
  var tempArr = (num + '').split('');
  for (var t of tempArr) {
    sum += (+t);
  }
  if (sum > 9) {
    sum = addDigits(sum);
  }
  return sum;
};

console.log(addDigits(-0));