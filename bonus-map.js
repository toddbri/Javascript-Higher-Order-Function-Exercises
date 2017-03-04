
function map(arr,fun){
  var arrayOutput =[];
  for (var index in arr){
      arrayOutput.push(fun(arr[index]));
  }
  return arrayOutput;
}





console.log(map([1, 2, 3], function(n) { return n * n; }));
