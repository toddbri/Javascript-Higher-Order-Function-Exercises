function map(arr,fun){
  return arr.map(fun);
}


map(["b","c","d","g","j"],function(item){console.log("1-Give me a "+ item);});

//----------- Alternate Method ------------------------
console.log("-".repeat(10));

var whatever = function(item){
  return ("Give me a " + item);
};

 var newArray = mapAlt(["b","c","d","g","j"],whatever);
console.log(newArray);

function mapAlt(arr,fun){
  var tmpArray =[];
  for (var index in arr){
    newValue = fun(arr[index]);
    tmpArray.push(newValue);
  }
  return tmpArray;
}
