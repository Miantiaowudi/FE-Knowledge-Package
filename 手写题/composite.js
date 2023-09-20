function composite() {
    const arr = [...arguments].reverse()
    return function () {
        let params = arguments
        return arr.reduce((pre, cur) => {
            return Array.isArray(pre) ? cur(...pre) : cur(pre)
        }, [...params])
    }
}

const f = x => x + 1
const g = x => x * 2
const t = (x, y) => x + y

let compose = composite(f, g, t)
let res = compose(1, 2)
console.log(res);

