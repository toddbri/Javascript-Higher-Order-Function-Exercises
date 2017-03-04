function filter(arr,func){
  var outArray = [];
  for (var x in arr){
    var value = arr[x];
    if (func(value)===true) {outArray.push(value);}
  }
  return outArray;
}


var output = filter([1, 2, 3], function(n) { return n % 2 === 1 ;});
console.log(output);
