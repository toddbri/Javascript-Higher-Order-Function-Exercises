
function reduce (arr,combine,initialvalue){
  var cv = initialvalue;
  for (var i in arr){
    var value = arr[i];
    cv = combine(cv,value);
  }
  return cv;
}

var result = reduce([1, 2, 3], function(value, n) { return value + n; }, 0);
console.log(result);


var result = reduce([1, 2, 3,56,-5,9,18], function(value, n) { return value + n; }, 0);
console.log(result);
