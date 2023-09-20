const sUrl = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
const sKey = 'key'
// const keyString = sUrl.split('?')[1].split('#')[0].split('&')
// let obj = {}
// keyString.forEach(i => {
//     const [key, value] = i.split('=')
//     !obj[key] ? obj[key] = [value] : obj[key].push(value)
// })
// if (!sKey) {
//     console.log(obj)
// }else if(!obj[sKey]) {
//     console.log('')
// }else {
//     console.log(obj[sKey].length == 1 ? obj[sKey][0] : obj[sKey]) 
// }

function getUrlParam(sUrl, sKey) {
  const obj = {};
  const keyString = sUrl.split('?')[1]
  keyString.replace(/(\w+)=(\w+)&?/g, function (a, key, value) {
    !obj[key] ? obj[key] = [value] : obj[key].push(value)
  });
  if (!sKey) {
    console.log(obj)
  }else if(!obj[sKey]) {
    console.log('')
  }else {
    console.log(obj[sKey].length == 1 ? obj[sKey][0] : obj[sKey]) 
  }
}

let res = getUrlParam(sUrl, sKey)
// console.log(res)