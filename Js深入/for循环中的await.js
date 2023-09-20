function log(msg, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg)
        }, time)
    })
}

// (async () => {
//     for (let i = 0; i < 5; i++) {
//         await log(i, 1000)
//     }
// })()

// (async () => {
//     [1, 2, 3, 4].forEach(async (i) => {
//         await log(i, 1000)
//     })
// })()

// (async () => {
//     for (const i of [1, 2, 3, 4]) {
//         await log(i, 1000)
//     }
// })()

