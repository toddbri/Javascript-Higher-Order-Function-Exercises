var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

function sumArray(sum,element){
  return sum + element;   //sum the elments of the array and return the value
}

function orderArray(arrA, arrB){
    sumArrA = arrA.reduce(sumArray,0); //put the first element through a summing reduce function above
    sumArrB = arrB.reduce(sumArray,0); //put the second element through the same summing reduce function
    return sumArrA-sumArrB;  //return the sort information to the sort method.
}

var arr2 = arr.sort(orderArray); //run the Array arr through a sort/compare function

console.log(arr2);
