// leetcode 207 https://leetcode-cn.com/problems/course-schedule/solution/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/
const time = [1, 3, 4, 5, 8, 5, 3, 6]
const n = time.length
const tasks = [[0, 2], [2, 4], [2, 6]]
let in_degrees = new Array(n).fill(0)
let adj = new Array(n).fill(0).map(() => new Set())
for (const v of tasks) {
    in_degrees[v[0]] += 1
    adj[v[1]].add(v[0])
}
// console.log(in_degrees, adj)
const order = []
const q = []
in_degrees.forEach((item, index) => {
    if (item === 0) {
        q.push(index)
    }
})
while (q.length) {
    let task = q.shift()
    order.push(task)
    for (const v of adj[task]) {
        in_degrees[v] -= 1
        if (in_degrees[v] === 0) {
            q.push(v)
        }
    }
}
let map = new Map()
let res = new Array(n).fill(0)
let sum = 0
order.forEach(item => {
    sum += time[item]
    map.set(item, sum)
})
for (const v of map) {
    res[v[0]] = v[1]
}
console.log(res)
