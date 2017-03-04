function cc(str,offset){

  var lowerkey = "abcdefghijklmnopqrstuvwxyz";
  var upperkey =  lowerkey.toUpperCase();

  function map(output_str,char){
    if (char ===" "){
      return output_str + char;
    } else {

      usekey = upperkey.indexOf(char)===-1 ? lowerkey:upperkey;
      var start_location = usekey.indexOf(char);
      var end_location = (start_location + offset)%26;

      return output_str + usekey[end_location];
    }

  }

  var arrChar = str.split('');
  return arrChar.reduce(map,'');
}

console.log(cc('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar',13));
