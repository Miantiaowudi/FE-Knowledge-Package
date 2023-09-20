import heapq
tasks = [[7, 10], [50, 12], [7, 5], [3, 4], [7, 2]]
for i in range(len(tasks)):
    tasks[i].append(i)
# print(tasks)
res = []
tasks.sort(key=lambda x: (x[0], x[1]))
pq = [(tasks[0][1], tasks[0][2])]
# print(tasks)
n = len(tasks)
i = 1
time = tasks[0][0]
while True:
    while i < n:
        if tasks[i][0] <= time:
            heapq.heappush(pq, (tasks[i][1], tasks[i][2]))
            i += 1
            print(pq, time)
        elif not pq:
            heapq.heappush(pq, (tasks[i][1], tasks[i][2]))
            time = tasks[i][0]
            i += 1
            break
        else:
            break
    temp = heapq.heappop(pq)
    print(temp, pq)
    time += temp[0]
    print(time)
    res.append(temp[1])
    if len(res) == n:
        break
print(res)
