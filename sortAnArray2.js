var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];



function lengthSort(a,b){
    console.log("a: " + a + " , b: " + b + " - " + (a.length<b.length));
    if (a.length>b.length){
      return 1;

    }else if (a.length<b.length){
      return -1;
    } else {return 0;}
}

console.log(people.sort(lengthSort));
