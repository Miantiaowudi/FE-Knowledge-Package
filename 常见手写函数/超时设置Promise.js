// function timeOut(delay) {
//   return new Promise((resolve, reject) => {
//     new Promise(resolve => {
//       setTimeout(() => {
//         resolve()
//       },1000)
//     }).then(() => {
//       resolve('成功了')
//     })
//     setTimeout(() => {
//       reject('超时')
//     }, delay);
//   })
// }

// timeOut(2000).then(() => {
//   console.log('成功了')
// }).catch(() => {
//   console.log('失败了')
// })

// console.log('----')

// timeOut(500).then(() => {
//   console.log('成功了')
// }).catch(() => {
//   console.log('失败了')
// })

// function timeOutHandle(delay) {
//   let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 1000);
//   })
//   let p2 = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject()
//     }, delay);
//   })
//   return Promise.race([p1,p2])
// }

// timeOutHandle(2000).then(() => {
//   console.log('成功了')
// }).catch(() => {
//   console.log('失败了')
// })

// console.log('----')

// timeOutHandle(500).then(() => {
//   console.log('成功了')
// }).catch(() => {
//   console.log('失败了')
// })

async function reqTimeOut() {
  let start = Date.now()
  let p = await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
  let end = Date.now()
  return end-start > 5000 ? Promise.resolve() : Promise.reject() 
}


let res = reqTimeOut()
  .then(() => {
    console.log("成功的Promise对象");
  })
  .catch(() => {
    console.log("失败的Promise对象");
  });
console.log(res)

// async function reqTimeOut() {
//   let start = Date.now();
//   let p = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
//   let end = Date.now();
//   console.log(`${end - start}ms`);
//   return end - start < 500 ? Promise.resolve() : Promise.reject();
// }
// let res = reqTimeOut()
//   .then(() => {
//     console.log("成功的Promise对象");
//   })
//   .catch(() => {
//     console.log("失败的Promise对象");
//   });
// console.log(res);
