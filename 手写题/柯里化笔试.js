function clg(name, age, fruit) {
    console.log(`My name is ${name},I'm ${age} years old,I like ${fruit}`);
}

// function curry(fn) {
//     return function inner() {
//         let params = arguments
//         if (arguments.length == 3) {
//             return fn(...arguments)
//         } else {
//             return (...arguments) => inner(...params, ...arguments)
//         }
//     }
// }

const curry = (fn, ...args) => {
    console.log(args.length);
    return args.length >= fn.length ? fn(...args.slice(0, fn.length)) : (..._args) => curry(fn, ...args, ..._args);
}



let help = curry(clg)
help('小明', '20', 'apple')
help('小红', '21')('banana')
help('小王')('22', 'peach')
help('小张')('23')('pear')

