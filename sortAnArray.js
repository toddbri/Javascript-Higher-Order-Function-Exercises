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
console.log("sorted in alphabetical order");
console.log(people.sort()); //this is a regular sort

function reverseSort(a,b){
    if (a<b){
      return 1;

    }else if (a>b){
      return -1;
    } else {return 0;}
}

console.log("-".repeat(8));
console.log("sorted in reverse alphabetical order");
console.log(people.sort(reverseSort)); //this will sort in reverse order
