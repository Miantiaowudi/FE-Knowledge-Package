function timeFn(fn, a, b) {
  let n = 0;
  let time = {};
  (function inner() {
    time.id = setTimeout(() => {
      fn()
      n += 1
      inner()
    }, a + n * b);
  })()
  return function () {
    clearTimeout(time.id)
  }
}

const clg = () => console.log(111);
let clear = timeFn(clg, 100, 200)
