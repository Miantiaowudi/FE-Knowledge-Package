window.name = 'ByteDance';
function A() {
  this.name = 123;
}
A.prototype.getA = function () {
  console.log(this); //window
  return this.name + 1;
}
let c = new A();
let funcA = c.getA;
funcA();  // ByteDance1
