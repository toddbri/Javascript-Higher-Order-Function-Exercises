var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];


function lt70(city){
  if (city.temperature<70){
    return true;
  } else{
    return false;
  }

}

var coolCities = cities.filter(lt70);
console.log(coolCities);
