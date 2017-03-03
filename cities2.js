var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];


function lt70(city){
  return city.name;

}

var nameofCities = cities.map(lt70);
console.log(nameofCities);
