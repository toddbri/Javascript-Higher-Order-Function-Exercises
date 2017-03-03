function callNTimes(times,fun){
  for (var i=1;i<=times;i++){
    fun();
  }
}

function whatever(){
  console.log("Hello, world!");
}

callNTimes(5,whatever);
