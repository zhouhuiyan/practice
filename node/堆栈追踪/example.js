function c(){
  b();
}
function b(){
  a();
}
function a(){
  throw new Error("here error");
}
c();