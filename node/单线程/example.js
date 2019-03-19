var a = Date.now();

setTimeout(function(){
  console.log(Date.now() - a); //理想1000
},1000);

setTimeout(function(){
  console.log(Date.now() - a);//理想2000
},2000);


// 本次实际
// 1008
// 2013