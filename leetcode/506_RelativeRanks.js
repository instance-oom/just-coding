// https://leetcode.com/problems/relative-ranks/?tab=Description

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  if (!nums) return [];
  if (nums.length === 1) return ['Gold Medal'];
  var temp = [];
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    temp.push({
      index: i,
      value: nums[i]
    });
  }
  temp.sort(function (item1, item2) {
    return item2.value - item1.value;
  });
  for (var i = 0; i < length; i++) {
    var item = temp[i];
    if (i === 0) {
      item.rank = 'Gold Medal';
      continue;
    }
    if (i === 1) {
      item.rank = 'Silver Medal';
      continue;
    }
    if (i === 2) {
      item.rank = 'Bronze Medal';
      continue;
    }
    item.rank = (i + 1) + '';
  }
  temp.sort(function (item1, item2) {
    return item1.index - item2.index;
  });
  var result = [];
  for (var i = 0; i < length; i++) {
    result.push(temp[i].rank);
  }
  return result;
};

var nums = [4, 5, 3, 2, 1];
console.log(findRelativeRanks(nums));