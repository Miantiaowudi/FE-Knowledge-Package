const time = [5, 7, 6, 8, 4]
const n = time.length
console.log(n)
const pre = [[1, 0], [2, 1], [2, 3], [4, 0], [4, 3]]
const in_degrees = new Array(n).fill(0)
const adj = new Array(n).fill(0).map(() => new Set())
for (const v of pre) {
    in_degrees[v[0]] += 1
    adj[v[1]].add(v[0])
}
console.log(adj, in_degrees)
let res = []
const dfs = (num, sum) => {
    if (adj[num].size === 0) {
        sum += time[num]
        res.push(sum)
    }
    for (const v of adj[num]) {
        dfs(v, sum + time[num])
    }
}

for (let i = 0; i < n; i++) {
    if (in_degrees[i] === 0) {
        dfs(i, 0)
    }
}
console.log(res)