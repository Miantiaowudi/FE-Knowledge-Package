// function sleep(delay) { 
//     return new Promise((resolve) => setTimeout(resolve, delay));

// }
// async function foo() { 
//     const t0 = Date.now(); 
//     await sleep(1500); // 暂停约 1500 毫秒
//     console.log(Date.now() - t0); 
// } 
// foo();

// async function randomDelay(id) { 
//     // 延迟 0~1000 毫秒
//     const delay = Math.random() * 1000; 
//     return new Promise((resolve) => setTimeout(() => { 
//         console.log(`${id} finished take ${delay}ms`); 
//         resolve(); 
//     }, delay)); 
// } 
// async function foo() { 
//     const t0 = Date.now(); 
//     await randomDelay(0); 
//     await randomDelay(1); 
//     await randomDelay(2); 
//     await randomDelay(3); 
//     await randomDelay(4); 
//     console.log(`${Date.now() - t0}ms elapsed`); 
// } 
// foo();

// async function randomDelay(id) { 
//     // 延迟 0~1000 毫秒
//     const delay = Math.random() * 1000; 
//     return new Promise((resolve) => setTimeout(() => { 
//         // setTimeout(console.log, 0, `${id} finished`); 
//         console.log(`${id} finished take ${delay}ms`); 
//         resolve(); 
//     }, delay)); 
// } 
// async function foo() { 
//     const t0 = Date.now(); 
//     const p0 = randomDelay(0); 
//     const p1 = randomDelay(1); 
//     const p2 = randomDelay(2); 
//     const p3 = randomDelay(3); 
//     const p4 = randomDelay(4); 
//     await p0; 
//     await p1; 
//     await p2; 
//     await p3; 
//     await p4; 
//     // setTimeout(console.log, 0, `${Date.now() - t0}ms elapsed`);
//     console.log(`${Date.now() - t0}ms elapsed`); 
// } 
// foo();

function* sleepGenerator(time){
    yield new Promise(resolve => setTimeout(resolve, time));
}
const to = Date.now()
const sleep = time => sleepGenerator(time).next().value;
console.log(sleep)
const delay = Math.random() * 1000
sleep(delay).then(() => console.log(`delay = ${delay.toFixed(4)}ms ${Date.now() - to}ms elapsed`))
