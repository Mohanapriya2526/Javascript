// const str="Mohanapriya S";
// const v="a,e,i,o,u";
// let count=0;
// let str1=str.toLowerCase();
// vowelsCount();
// function vowelsCount(){
// for(let i=0;i<str1.length;i++)
// {
//     for(let j=0;j<v.length;j++)
//     {
//         if(str1[i]==v[j])
//         count++;
//     }
    
// }
// return count;

// }
// console.log (str);
// console.log(vowelscount);

const str = 'Mohanapriya S';
  
const vowels = ['a', 'e', 'i', 'o', 'u'];
str1 = str.toLowerCase();
let count = 0;
numberOfVowels = countVowels(str1);
function countVowels(str1) {
for (let i = 0; i < str1.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
   
  }
}

return count;
}

console.log(str);

console.log( numberOfVowels);