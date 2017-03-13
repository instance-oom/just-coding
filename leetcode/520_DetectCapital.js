// https://leetcode.com/problems/detect-capital/?tab=Description

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (!word) return false;
  if (word.length === 1) return true;
  var firtCharCode = word.charCodeAt(0);
  var secondCharCode = word.charCodeAt(1);
  var isUpper = false;
  if (firtCharCode >= 65 && firtCharCode <= 90) {
    isUpper = (secondCharCode >= 65 && secondCharCode <= 90);
  }
  if (isUpper) {
    return /^[A-Z]*$/.test(word);
  } else {
    return /^[a-zA-Z]{1,1}[a-z]*$/.test(word);
  }
};

console.log(`Detect capitalUse for '' is ${detectCapitalUse('')}`);
console.log(`Detect capitalUse for 'A' is ${detectCapitalUse('A')}`);
console.log(`Detect capitalUse for 'g' is ${detectCapitalUse('g')}`);
console.log(`Detect capitalUse for 'USA' is ${detectCapitalUse('USA')}`);
console.log(`Detect capitalUse for 'leetcode' is ${detectCapitalUse('leetcode')}`);
console.log(`Detect capitalUse for 'Google' is ${detectCapitalUse('Google')}`);
console.log(`Detect capitalUse for 'FlaG' is ${detectCapitalUse('FlaG')}`);
console.log(`Detect capitalUse for 'aFlag' is ${detectCapitalUse('aFlag')}`);