function strMultiply(str,times){

  var arrLoop = range(0,times);
  var arr_result = arrLoop.reduce(joinIt,"");

  function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
  }

  function joinIt(output,element,counter){
    return output +=str;
  }
  return arr_result;
}


console.log(strMultiply('abc', 5));
