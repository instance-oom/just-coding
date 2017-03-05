// https://leetcode.com/problems/hamming-distance/?tab=Description

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  if (x === y === 0) return 0;
  var xor = x ^ y;
  return xor.toString('2').replace(/0/g, '').length;
};

console.log(`Hamming distance for 1 and 4 is ${hammingDistance(1, 4)}`);