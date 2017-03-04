function box(width,height){

  function range(min, max) { //this was supplied by Toby to avoid us using the for loop directly
    var arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
  }

  var arrLoopW = range(0,width);  //create an array of size width to loop over
  var arrLoopH = range(0,height); //create an array of size height to loop over

  var strLine = arrLoopW.reduce(function(output,element){return output+="*";},"");  //create single line
  var strLines = arrLoopH.reduce(function(output,element){return output+=strLine+"\n";},""); //create the box

  return strLines;
}

console.log(box(10,4));

console.log ("-".repeat(5));

console.log(box(4,10));
