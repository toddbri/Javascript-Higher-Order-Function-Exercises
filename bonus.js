var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});

function forEach(array,fun){
  array.forEach(fun);
}
//-------- Alternate method -------
console.log("-".repeat(10));


forEachAlt(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});



function forEachAlt(array,fun){
  for(var index in array){
    fun(array[index]);
  }

}
