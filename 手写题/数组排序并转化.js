const arr = [2, 5, 6, 8, 1, 3];
// 数组排序，将连续的分为一组（[[1, 2, 3], [5, 6], [8]]），在转成[‘1 -> 3’, ’5 -> 6’, ’8’]
function transArr(arr) {
  arr.sort();
  const groupArr = [[arr[0]]];
  let tempIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      groupArr[tempIndex].push(arr[i]);
    } else {
      groupArr.push([arr[i]]);
      tempIndex += 1;
    }
  }
  return groupArr.map((arr) => {
    const len = arr.length;
    return `${arr[0]} -> ${arr[len - 1]}`;
  });
}

let res = transArr(arr);
console.log(res);
