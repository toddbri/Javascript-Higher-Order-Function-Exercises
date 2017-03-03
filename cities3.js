var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function names(city){
  return city.name;
}


function lt70(city){
  return (city.temperature<70);

}

var coolCities = cities.filter(lt70).map(names);
console.log(coolCities);
