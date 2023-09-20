//方法一：JSON.stringify + 正则
function flat(arr) {
  let str = '[' + JSON.stringify(arr).replace(/\[|\]/g, '').split(',') + ']';
  return JSON.parse(str);
}

//方法二：reduce + 递归
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) ? pre.concat(flatten(cur)) : pre.concat(cur)
  },[])
}

const a = [1, [2, [3, 4,[5,,6],7]],[8,9,[10]]];

let res1 = flat(a).filter(i => i)
let res2 = flatten(a)
console.log(res1, Array.isArray(res1))
console.log(res2)