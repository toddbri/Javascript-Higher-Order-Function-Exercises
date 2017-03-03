function product(arr){
  return arr.reduce(function(total,element){return total*=element;},1);
}

console.log(product([3,4,5]));
