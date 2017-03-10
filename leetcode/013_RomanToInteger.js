// https://leetcode.com/problems/roman-to-integer/?tab=Description

/*
* 1 => I  2 => II(I+I)  3 => III(I+I+I) 4 => IV(-I+V) 5 => V  6 => VI(V+I)  7 => VII(V+I+I) 8 => VIII(V+I+I+I)  9 => IX(-I+X)
* 10 => X 20 => XX(X+X) 30 => XXX(X+X+X)  40 => XL(-X+L)  50 => L 60 => LX(L+X) 70 => LXX(L+X+X)  80 => LXXX(L+X+X+X) 90 => XC(-X+C)
* 100 => C  200 => CC(C+C)  300 => CCC(C+C+C) 400 => CD(-C+D) 500 => D 600 => DC(D+C) 700 => DCC(D+C+C)  800 => DCCC(D+C+C+C) 900 => CM(-C+M)
* 1000 => M 2000 => MM(M+M) 3000 => MMM(M+M+M)
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var length = s.length;
  var num = getNumber(s[0]);
  var tempArr = [num];
  for (var i = 1; i < length; i++) {
    tempArr[i] = getNumber(s[i]);
    if (tempArr[i] > tempArr[i - 1]) {
      num += tempArr[i] - 2 * tempArr[i - 1];
    } else {
      num += tempArr[i];
    }
  }
  return num;
};

var getNumber = function (char) {
  switch (char) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
  }
}

var intToRoman = function (num) {
  var c = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"]
  ]
  var roman = '';
  roman += (c[3][Math.floor(num / 1000 % 10)]);
  roman += (c[2][Math.floor(num / 100 % 10)]);
  roman += (c[1][Math.floor(num / 10 % 10)]);
  roman += (c[0][num % 10]);
  return roman;
}

let num = Math.floor(Math.random() * 3998);
console.log("Init Number: ", num);
var roman = intToRoman(num);
console.log("Roman Number: ", roman);
console.log(romanToInt(roman));