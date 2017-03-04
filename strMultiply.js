function strMultiply(str,times){

  var arrLoop = range(0,times);
  var arr_result = arrLoop.reduce(joinIt,"");

  function joinIt(accumulator,element){ //the element is not used, it can be left off as javascript is tolerant of missing parameters in function calls
    return accumulator + str;
  }

      function range(min, max) {  //This was given by Toby as a substitue for using a for loop directly
      var arr = [];
      for (var i = min; i < max; i++) {
        arr.push(i);
      }
      return arr;
      }

  return arr_result;
}


console.log(strMultiply('abc', 5));
