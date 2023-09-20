function f() {
  console.log(this, 'f');
}
let a = { 'res': 'a' }
let b = { 'res': 'b' }
let f1 = f.bind(a)
let f2 = f1.bind(b)
f2()