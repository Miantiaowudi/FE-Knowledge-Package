let arr = [6, 1, 2, 9, 4, 3, 10, 5, 8, 7]
function mergeSort(arr) {
    const n = arr.length
    if (n === 1) return arr
    let midIndex = Math.floor(n / 2)
    return merge(mergeSort(arr.slice(0, midIndex)), mergeSort(arr.slice(midIndex, n)))
}

function merge(left, right) {
    let res = []
    while (left.length && right.length) {
        left[0] < right[0] ? res.push(left.shift()) : res.push(right.shift())
    }
    while (left.length) {
        res.push(left.shift())
    }
    while (right.length) {
        res.push(right.shift())
    }
    return res
}

let res = mergeSort(arr)
console.log(res)