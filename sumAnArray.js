function sumIt(sum,element){
  return sum + element;
}

function sum(array){
  return array.reduce(sumIt,0);
}

console.log(sum([1,2,3]));
