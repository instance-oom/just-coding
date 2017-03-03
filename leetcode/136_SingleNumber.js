// https://leetcode.com/problems/single-number/?tab=Description

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var sum = nums[0];
  for (var i = 1; i < nums.length; i++) {
    sum = sum ^ nums[i];
  }
  return sum;
};

var arr = [1, 3, 1, 2, 3, 5, 2];
console.log(singleNumber(arr));