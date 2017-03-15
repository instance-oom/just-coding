// https://leetcode.com/problems/binary-watch/#/description

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  if (num < 0 || num > 8) return [];
  if (num === 0) return ["0:00"];
  var times = {};
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 60; j++) {
      var temp;
      if (j < 10) {
        temp = i + ':0' + j;
      } else {
        temp = i + ":" + j;
      }
      var count = i.toString(2).replace(/0/g, '').length + j.toString(2).replace(/0/g, '').length;
      if (!times[count]) times[count] = [];
      times[count].push(temp);
    }
  }
  return times[num];
};

console.log(readBinaryWatch(4));