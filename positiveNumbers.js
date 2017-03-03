var arr = [1,34,-5,6,2,34,90,-8,0,-67];

function pos(a){
  return (a>=0);
}

function even(a){
  return  (a%2===0);

}

function squareIt(n){
  return Math.pow(n,2);
}
var arr_positives = arr.filter(pos);
var arr_evens = arr.filter(even);
var arr_squares = arr.map(squareIt);

console.log("Positives: " + arr_positives);
console.log("Evens: " + arr_evens);
console.log("Squares: " + arr_squares);
