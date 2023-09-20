// function deepClone(target, map = new Map()) {
//     if (target !== null && typeof target === 'object') {
//         // 从缓存容器中读取克隆对象
//         let cloneTarget = map.get(target)
//         // 如果存在, 返回前面缓存的克隆对象
//         if (cloneTarget) {
//             return cloneTarget
//         }
//         // 创建克隆对象(可能是{}或者[])  
//         cloneTarget = target instanceof Array ? [] : {}
//         // 缓存到map中
//         map.set(target, cloneTarget)
//         for (const key in target) {
//             if (target.hasOwnProperty(key)) {
//                 // 递归调用, 深度克隆对象, 且传入缓存容器map
//                 cloneTarget[key] = deepClone3(target[key], map)
//             }
//         }
//         return cloneTarget
//     }
//     return target
// }

function clone(target, map = new WeakMap()) {
    // console.log(target, map)
    if (target !== null && typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        console.log(cloneTarget);
        return cloneTarget;
    } else {
        return target;
    }
};

const a = { 1: 2, 3: [4, 5, { 6: 7 }] }
a.a = a
console.log(a)
let b = clone(a)
console.log(b)

