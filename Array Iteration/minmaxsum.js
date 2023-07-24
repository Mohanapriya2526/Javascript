const points = [ 55, 35, 65, 75]
let value = points.reduce((value, num) => value + num, 0);
function max(arr) {
  return Math.max.apply(null, arr);
} 
function min(arr) {
return Math.min.apply(null, arr);
}
console.log ( value );
console.log ( max(points));
console.log (min(points));