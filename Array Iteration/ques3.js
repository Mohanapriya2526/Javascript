// 3) Find the first element, which is divisible by 10 in the given array.

const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];

const num = (arr) =>  arr?.find((num) => num % 10 === 0);

console.log(num(numbers))
console.log(num())