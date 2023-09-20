/**
 * 
 * @param {Array} arr 
 */

function insertionSort(arr) {
  const len = arr.length;
    for (let i = 1; i < len; i++) {
    console.log(arr)
      let j = i;
      let tmp = arr[i];
      while(j > 0 && arr[j-1] > tmp) {
          arr[j] = arr[j-1];
          j--;
      }
      arr[j] = tmp;
    }
  return arr;
}

const arr = [1, 3, 0, 2, 4, 6, 5, 7, 9, 8]
insertionSort(arr)