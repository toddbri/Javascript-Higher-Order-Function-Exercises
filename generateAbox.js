function box(width,height){

  function range(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
  }

  var arrLoopW = range(0,width);
  var arrLoopH = range(0,height);

  var strLine = arrLoopW.reduce(function(output,element){return output+="*";},"");
  var strLines = arrLoopH.reduce(function(output,element){return output+=strLine+"\n";},"");

  return strLines;
}

console.log(box(10,4));
