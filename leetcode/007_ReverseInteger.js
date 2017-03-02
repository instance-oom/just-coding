// https://leetcode.com/problems/reverse-integer/?tab=Description

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var isNegative = x < 0;
  x = Math.abs(x);
  var str = x.toString();
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  arr = arr.reverse();
  var result = parseInt(arr.join(''))
  if (isNegative) {
    result = -result;
  }
  if (!result || result > 2147483647 || result < -2147483647) {
    result = 0;
  }
  return result;
};

console.log(reverse(1234552));