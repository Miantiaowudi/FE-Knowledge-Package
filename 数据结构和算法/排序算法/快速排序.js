let arr = [6, 1, 2, 9, 4, 3, 10, 5, 8, 7]
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left > right) return
    let base = arr[left]
    let leftPoint = left
    let rightPoint = right
    while (leftPoint < rightPoint) {
        while (arr[rightPoint] >= base && leftPoint < rightPoint) {
            rightPoint--
        }
        while (arr[leftPoint] <= base && leftPoint < rightPoint) {
            leftPoint++
        }
        if (leftPoint < rightPoint) {
            [arr[leftPoint], arr[rightPoint]] = [arr[rightPoint], arr[leftPoint]]
        }
    }
    // arr[left] = arr[leftPoint]
    // arr[leftPoint] = base
    [arr[left], arr[leftPoint]] = [arr[leftPoint], arr[left]]
    quickSort(arr, left, leftPoint - 1)
    quickSort(arr, leftPoint + 1, right)
}
quickSort(arr)
console.log(arr)



// function quickSort2(arr) {
//     if (arr.length <= 1) return arr
//     let left = []
//     let right = []
//     let mid = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         arr[i] > mid ? right.push(arr[i]) : left.push(arr[i])
//     }
//     return [...quickSort2(left), mid, ...quickSort2(right)]
// }

// let res = quickSort2(arr)
// console.log(res)