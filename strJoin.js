function strJoin(strs,sep){

  function joinIt(output,element,counter){
    if (counter === 0){
      output +=element;
    } else {
      output +=sep + element;
    }
    counter +=1;
    return output;
  }
  return strs.reduce(joinIt,"");
}



console.log(strJoin(['Hello', 'and', 'goodbye'], ' '));
