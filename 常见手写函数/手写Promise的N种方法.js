/**
 * 
 * @param {Array} promisesArr 
 */

function promiseAll(promisesArr) {
  return new Promise((resolve, reject) => {
    const n = promisesArr.length
    const res = []
    let i = 0
    promisesArr.forEach((promise, index) => {
      promise().then((value) => {
        res[index] = value
        i++
        if (i == n) {
          resolve(res)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })
}

/**
 * 
 * @param {Array} promisesArr 
 */

function promiseRace(promisesArr) {
  return new Promise((resolve, reject) => {
    promisesArr.forEach(promise => {
      promise().then((value) => {
        resolve(value)
      }).catch(err => {
        reject(err)
      })
    })
  })
}

/**
 * 
 * @param {Array} promisesArr 
 */

function promiseAllSettled(promisesArr) {
  return new Promise((resolve, reject) => {
    const n = promisesArr.length
    const res = []
    let i = 0
    promisesArr.forEach((promise, index) => {
      promise().then((value) => {
        res[index] = value
      }, (err) => {
        res[index] = err
      }).finally(() => {
        i++
        if (i == n) {
          resolve(res)
        }
      })
    })
  })
}

/**
 * 
 * @param {Array} promisesArr 
 */
function promiseAny(promisesArr) {
  return new Promise((resolve, reject) => {
    const n = promisesArr.length
    let i = 0
    promisesArr.forEach(promise => {
      promise().then((value) => {
        resolve(value)
      }).catch(() => { }).finally(() => {
        i++
        if (i == n) {
          reject('请求都失败了')
        }
      })
    })
  })
}


const tasks = [
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        // resolve(15);
        reject(15)
      }, 1500)
    ),
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        // resolve(21);
        reject(21)
      }, 2100)
    ),
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        // resolve(6);
        reject(6)
      }, 600)
    ),
];

// promiseAll(tasks).then((value) => {
//   console.log(value)
// }, (err) => {
//   console.log(err)
// })

// promiseRace(tasks).then((value) => {
//   console.log(value)
// }, (err) => {
//   console.log(err)
// })

// promiseAllSettled(tasks).then((value) => {
//   console.log(value)
// })

promiseAny(tasks).then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err)
})