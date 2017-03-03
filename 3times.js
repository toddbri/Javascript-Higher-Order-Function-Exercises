function call3Times(fun) {
  fun();
  fun();
  fun();
}

function whatever(){
  console.log("Hello, world!");
}

call3Times(whatever);
