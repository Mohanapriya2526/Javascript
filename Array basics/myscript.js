
let number1 = [1, 2, 3, 4, 5 ]
let number2 =[ 6, 7, 8, 9, 10]
let num3= number1.concat(number2)
let even = []
let odd = []
let sum = 0
let sum1 = 0
document.getElementById("demo").innerHTML = num3
for (let i = 0; i < num3.length; i++) {
    if (num3[i] % 2 == 0){
       even.push(num3[i])
        sum = sum +num3[i]
    }
    else {
        odd.push(num3[i])
        sum1 = sum1 +num3[i]}
}
console.log(num3)
console.log(even)
console.log(sum)
console.log(odd)
console.log(sum1)