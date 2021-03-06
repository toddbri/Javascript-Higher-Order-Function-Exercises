function strJoin(strs,sep){

  function joinIt(output,element,counter){
    if (counter === 0){
      output +=element;
    } else {
      output +=sep + element;
    }
    return output;
  }
  return strs.reduce(joinIt,""); //this is what sets things in motion
}

// ------Alternate method --------

function strJoinAlternate(strs,sep){

  function joinIt(accumulator, element){
    if (accumulator.length===0){
      return element;
    } else {
      return accumulator + sep + element;
    }
  }

  return strs.reduce(joinIt,"");   //this is what sets things in motion
}

console.log(strJoin(['Hello', 'and', 'goodbye'], ' '));

console.log(strJoinAlternate(['Hello', 'and', 'goodbye'], ' '));
