import collections
import heapq
paths = [[0, 4, 2], [4, 3, 5], [3, 0, 5], [0, 1, 5], [3, 2, 4], [1, 2, 8]]
cnt = 8
start = 0
end = 3
charge = [4, 1, 1, 3, 2]

n = len(charge)
g = [[] for i in range(n)]
for [u, v, w] in paths:
    g[u].append((v, w))
    g[v].append((u, w))
print(g)
dist = [[2147483647] * (cnt+1) for i in range(n)]
visit = [[False] * (cnt+1) for i in range(n)]
dist[start][0] = 0
Q = [(0, start, 0)]
ret = 2147483647
count = 1
while Q:
    # print(Q, count)
    (d, u, p) = heapq.heappop(Q)
    # (d, u, p) = Q.pop()
    # if dist[u][p] != d:
    #     continue
    if visit[u][p]:
        continue
    visit[u][p] = True
    if u == end:
        ret = min(ret, d)
    for i in range(p+1, cnt+1):
        cost = (i-p)*charge[u]
        if d+cost < dist[u][i]:
            dist[u][i] = d+cost
            heapq.heappush(Q, (d+cost, u, i))
    for (v, w) in g[u]:
        if p >= w and d+w < dist[v][p-w]:
            dist[v][p-w] = d+w
            heapq.heappush(Q, (d+w, v, p-w))
print(ret, dist)
