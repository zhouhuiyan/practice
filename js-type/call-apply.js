// // let a = 'b'
// function a (){
//   this.a == 'b';
//   console.log(this.a == 'b')
// }

// //call apply可以改变this的指向
// a.call({a:'b'});//call接受参数列表

function a(b,c){
  b == 'first';
  c == 'second';
}

console.log(a.length);
a.call('first','second');
// b.apply({a:'b'},['first','second']);
// // b.apply({a:'b'},['a','b']);