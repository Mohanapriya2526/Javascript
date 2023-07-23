// 9) Find the sum of all array elements.
var numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];
const sum = numbers.reduce((value, num) => value + num, 0);
console.log(sum)