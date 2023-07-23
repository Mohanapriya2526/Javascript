// 2) Find the element, which is divisible by 7 using forEach loop.

const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];


let divisibleBy7 = null;
numbers.forEach((num) => {
    if (num % 7 == 0) {
        divisibleBy7 = num;
    }
});

console.log(divisibleBy7)