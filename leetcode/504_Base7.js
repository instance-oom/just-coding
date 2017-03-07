// https://leetcode.com/problems/base-7/?tab=Description

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    return num.toString(7);
};

console.log(`7 => ${convertToBase7(7)}`);
console.log(`100 => ${convertToBase7(100)}`);
console.log(`-100 => ${convertToBase7(-100)}`);