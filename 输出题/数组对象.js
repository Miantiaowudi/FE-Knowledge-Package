let a = [1, 2, 3]
let d = {}
function b(c, d) {
    c = []
    d.b = 2
    d = { a: 1 }
}
b(a, d)
console.log(a)
console.log(d)