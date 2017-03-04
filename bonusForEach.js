var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});


function forEach(array,fun){
  for(var index in array){
    fun(array[index]);
  }

}
