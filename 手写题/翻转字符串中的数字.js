const str = "123abd3-adfz-34-akjkfaf";
// 输出：332abd1-adfz-43-akjkfaf
function reverseStr(str) {
  function reverseNumber(s) {
    const arr = s.split("");
    let i = 0,
      j = arr.length - 1;
    while (i < j) {
      if (isNaN(arr[i] * 1)) {
        i += 1;
      }
      if (isNaN(arr[j] * 1)) {
        j -= 1;
      }
      if (i < j && !isNaN(arr[i] * 1) && !isNaN(arr[j] * 1)) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i += 1;
        j -= 1;
      }
    }
    return arr.join("");
  }
  const arr = str.split("-");
  return arr.map((str) => reverseNumber(str)).join("-");
}

const res = reverseStr(str);
console.log(res);
