function acronym(arrOfwords){
  return arrOfwords.reduce(vipIT,"");
}

function vipIT(whatever,element){
  return whatever + element[0].toUpperCase();
}

console.log(acronym(['very','important','person']));
console.log(acronym(['national','aeronautics','space','administration']));
