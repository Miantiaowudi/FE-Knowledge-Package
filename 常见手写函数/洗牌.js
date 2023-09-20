const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function shuffle(arr) {
    return arr.slice().sort(() => Math.random() >= 0.5 ? -1 : 1);
}
let res = shuffle(arr)
console.log(res)
