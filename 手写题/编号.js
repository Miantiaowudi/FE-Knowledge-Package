// f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']

function numberArr(arr) {
  const res = [];
  const countObj = {};
  arr.forEach((item) => {
    !countObj[item]
      ? (countObj[item] = [1, 1])
      : (countObj[item] = [countObj[item][0] + 1, 1]);
  });
  arr.forEach((item) => {
    if (countObj[item][0] === 1) {
      res.push(item);
    } else {
      res.push(`${item}${countObj[item][1]}`);
      countObj[item][1] += 1;
    }
  });
  return res;
}

const arr = ["ab", "c", "d", "ab", "c"];
let res = numberArr(arr);
console.log(res);
