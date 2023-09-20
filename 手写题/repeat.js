// function repeat (func, times, wait) { /* your code */ }
// const repeatFunc = repeat(console, 4, 3000),
// 调用这个 repeatedFunc(“hellworld”)，会alert 4次 helloworld, 每次间隔3秒

function repeat(func, times, wait) {
  let count = times;
  return (...arguments) => {
    let timeid = setInterval(() => {
      if (count > 0) {
        func(...arguments);
        count -= 1;
      } else {
        clearInterval(timeid);
        timeid = null;
      }
    }, wait);
  };
}
const repeatFunc = repeat(console.log, 4, 1000);

repeatFunc("hellworld");
