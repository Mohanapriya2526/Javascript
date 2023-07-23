// 1) Find the Second largest and Second smallest element in the given array.
const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];


const secondLargest = numbers.sort((a, b) => b - a)[1];
const secondSmallest = numbers.sort((a, b) => a - b)[1];

console.log(secondLargest)
console.log(secondSmallest)