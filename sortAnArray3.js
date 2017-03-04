var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
console.log("before sort");
console.log(products);

function sortByPrice(arr){
  return arr.sort(function(elementa, elementb){return elementa.price - elementb.price ;},0);
}
console.log("-".repeat(8));
console.log("after sort");
console.log(sortByPrice(products));
