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

console.log(people.sort());

function reverseSort(a,b){
    console.log("a: " + a + " , b: " + b + " - " + (a<b));
    if (a<b){
      return 1;

    }else if (a>b){
      return -1;
    } else {return 0;}
}

console.log("-".repeat(10));
console.log(people.sort(reverseSort));
