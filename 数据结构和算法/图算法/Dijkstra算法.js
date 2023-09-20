// leetcode 5836
const n = 7, roads = [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]]
const graph = new Array(n).fill(0).map(() => new Array(n).fill(0))
roads.forEach(i => graph[i[0]][i[1]] = i[2]) //构建临接表

// [[0, 2, 0, 0, 5, 0, 7],
// [0, 0, 3, 3, 0, 0, 0],
// [0, 0, 0, 0, 0, 1, 0],
// [0, 0, 0, 0, 0, 1, 0],
// [0, 0, 0, 0, 0, 0, 2],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 3, 0, 1, 0]]

function dijstra(graph, src) {
    const n = graph.length
    const dist = new Array(n).fill(+Infinity); //用来记录，一点源点，到其他顶点的距离的数组。
    const visited = new Array(n).fill(false); //用来表示已经访问的节点。
    dist[src] = 0;

    for (let i = 0; i < graph.length; i++) {
        let edg = graph[src];
        visited[src] = true;
        for (let j = 0; j < edg.length; j++) {
            if (edg[j] !== 0) {
                if (dist[src] + edg[j] < dist[j]) {//记录最短路径
                    dist[j] = dist[src] + edg[j];//更新最短路径
                }
            }
        }

        let min = +Infinity;
        let minIndex = -1;
        //选出路径最短的节点，并且下一轮循环从这节点开始
        for (let b = 0; b < dist.length; b++) {
            if (!visited[b] && dist[b] < min) {
                min = dist[b];
                minIndex = b;
            }
        }
        src = minIndex;
    }
    return dist;
}

let res = dijstra(graph, 0)
console.log(res);