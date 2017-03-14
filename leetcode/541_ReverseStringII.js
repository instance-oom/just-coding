// https://leetcode.com/problems/reverse-string-ii/#/description

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  var tempArr = s.split('');
  var length = tempArr.length;
  if (length <= k) {
    return tempArr.reverse().join('');
  }
  var result = [];
  var i = 0;
  while (i < length) {
    var temp = tempArr.slice(i, i + k);
    result = result.concat(temp.reverse());
    temp = tempArr.slice(i + k, i + 2 * k);
    result = result.concat(temp);    
    i = i + 2 * k;
  }
  return result.join('');
};

console.log(`ab => ${reverseStr('ab', 3)}`);
console.log(`abcd => ${reverseStr('abcd', 3)}`);
console.log(`abcdefg => ${reverseStr('abcdefg', 2)}`);