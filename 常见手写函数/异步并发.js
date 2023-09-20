/**
 * --- 问题描述 ---
 *
 * 给出一组异步任务方法，和允许同时执行的个数，实现一个方法，用于并发执行异步任务
 *
 * --- 说明 ---
 *
 * - 当有任务执行完毕后，自动补充任务，始终保持正在执行的任务有 `concurrency` 个
 * - 返回 { resolved: [], rejected: [] }
 *
 **/

const { resolve } = require("path/posix")

// function parallel(tasks, concurrency) {

// }

// let res = parallel(tasks,3)


const tasks = [
  () => new Promise(resolve => 
    setTimeout(() => {
      resolve(10)
    }, 1000)),
  () => new Promise(resolve => 
    setTimeout(() => {
      resolve(9)
    }, 900)),
  () => new Promise((_,reject) => 
    setTimeout(() => {
      reject(8)
    }, 800)),
  () => new Promise(resolve => 
    setTimeout(() => {
      resolve(7)
    }, 700)),
  () => new Promise((_,reject) => 
  setTimeout(() => {
    reject(6)
  }, 600)),
  () => new Promise(resolve => 
    setTimeout(() => {
      resolve(5)
    }, 500)),
  () => new Promise((_,reject) => 
  setTimeout(() => {
    reject(4)
  }, 400))
]
// // tasks.forEach(i => i().then((value) => {
// //   console.log(value)
// // }).catch((err) => {
// //   console.log(err)
// // }))

// function multiRequest(urls, maxNum) {
//   const ret = [];
//   let i = 0;
//   let resolve;
//   const promise = new Promise(r => resolve = r);
//   const addTask = () => {
//     if (i >= ret.length) {
//       return resolve();
//     }

//     const task = request(urls[i++]).finally(() => {
//       addTask();
//     });
//     ret.push(task);
//   }

//   while (i < maxNum) {
//     addTask();
//     i++
//   }

//   return promise.then(() => Promise.all(ret));
// }

// 模拟请求
// function request(url) {
//   return new Promise((r) => {
//     const time = Math.random() * 1000;
//     setTimeout(() => r(url), time);
//   });
// }

// let res = multiRequest(tasks, 3)
// console.log(res)

// class Scheduler{
//     constructor(){
//         this.taskNum = 0;
//         this.taskQueue = [];
//     }

//     async add(promiseCreator){
//         //在Promise内部把resolve放到任务队列中，只有当resolve被调用，后面的的代码才被执行
//         if(this.taskNum>=2){
//             await new Promise((resolve)=>{
//                 this.taskQueue.push(resolve)
//             })
//         }

//         this.taskNum++;
//         let result = await promiseCreator();
//         this.taskNum--;
//         if(this.taskQueue.length>0){
//         //当前任务完成后，如果任务队列里有resolve，那么就调用resolve，之前被堵住的部分就可以得到执行
//             this.taskQueue.shift()();
//         }
//         return result;
//     }
// }

// let scheduler = new Scheduler();

// let timeout = time => new Promise((resolve)=>{
//     setTimeout(resolve, time);
// });

// function addTask(delay, num){
//     scheduler.add(()=>(
//         timeout(delay).then((val)=>{
//             console.log(num);
//         })
//     ))
// }

// addTask(1000, '1');
// addTask(500, '2');
// addTask(100, '3');
// addTask(50, '4');

// function PromiseLimit(funcArray, limit = 3) {
//   let i = 0;
//   const result = [];
//   const executing = [];
//   const queue = function () {
//     console.log(result,executing)
//     if (i === funcArray.length) return Promise.all(executing);
//     const p = funcArray[i++]();
//     result.push(p);
//     const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//     executing.push(e);
//     if (executing.length >= limit) {
//       return Promise.race(executing).then(
//         () => queue(),
//         e => Promise.reject(e)
//       );
//     }
//     return Promise.resolve().then(() => queue());
//   };
//   return queue().then(() => Promise.all(result));
// }

// // 测试代码
// // 修改测试代码 随机失败或者成功
// const result = [];
// for (let index = 0; index < 10; index++) {
//   result.push(function() {
//     return new Promise((resolve, reject) => {
//       console.log("开始" + index, new Date().toLocaleString());
//       setTimeout(() => {
//         if (Math.random() > 0.5) {
//           resolve(index);
//         } else {
//           reject(index);
//         }
//         console.log("结束" + index, new Date().toLocaleString());
//       }, parseInt(Math.random() * 1000));
//     });
//   });
// }
// PromiseLimit(tasks, 3).then((value) => {
//   console.log(value)
// }).catch((err) => {
//   console.log(err)
// })

// function batchFetch(urls, concurrentRequestsLimit) {
//   return new Promise(resolve => {
//       var documents = [];
//       var index = 0;
//       function recursiveFetch(num) {
//           if (index === urls.length) {
//               return;
//           }
//           urls[index++]().then(r => {
//               documents[num] = r;
//               if (documents.length === urls.length) {
//                   resolve(documents);
//               } else {
//                   recursiveFetch(index);
//               }
//           }).catch((err) => {
//               documents[num] = err;
//               if (documents.length === urls.length) {
//                   reject(documents);
//               } else {
//                   recursiveFetch(index);
//               }
//           })
//       }
//       for (let i = 0; i < concurrentRequestsLimit; i++) {
//           recursiveFetch(i);
//       }
//   });
// }

// batchFetch(tasks, 3).then((value) => {
//   console.log(value)
// }).catch((err) => {
//   console.log(err)
// })


// function parallelPromise(tasks, num) {
//   let res = { 'resolve': [], 'reject': [] }
//   let taskNum = 0
//   let taskQueue = []
//   async function next() {
//     if (taskNum >= num) {
//       await new Promise((resolve)=>{
//         taskQueue.push(resolve)
//       })
//       taskNum++;
//       await next().then((value) => {
//         res.resolve.push(value)
//       }).catch((err) => {
//         res.reject.push(value)
//       })
//       taskNum--;
//       if(this.taskQueue.length>0){
//         //当前任务完成后，如果任务队列里有resolve，那么就调用resolve，之前被堵住的部分就可以得到执行
//         this.taskQueue.shift()();
//       }
//       return result;
//     }
//   }
//   return res
// }

function multiRequest(urls, maxNum) {
  const ret = [];
  let i = 0;
  let resolve;
  const promise = new Promise(r => resolve = r);
  const addTask = () => {
    if (i >= arr.length) {
      return resolve();
    }

    const task = request(urls[i++]).finally(() => {
      addTask();
    });
    ret.push(task);
  }

  while (i < maxNum) {
    addTask();
  }

  return promise.then(() => Promise.all(ret));
}

// 模拟请求
function request(url) {
  return new Promise((r) => {
    const time = Math.random() * 1000;
    setTimeout(() => r(url), time);
  });
}