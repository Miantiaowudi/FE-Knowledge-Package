var myFunc = function (arr) {
    console.log('myFunc');
    console.log(arr);   //输出 [1, 2, 2, 3, 4, 6, 7]
}

// Function.prototype.before = function (fn) {
//     var _this = this;       //用来保存调用这个函数的引用，如myFunc调用此函数，则_this指向myFunc
//     return function () {      //返回一个函数，相当于一个代理函数，也就是说，这里包含了原函数和新函数，原函数指的是myFunc，新函数指的是fn
//         fn.apply(this, arguments);   //修正this的指向，将this指针指向fn，将myFunc接收的参数传给fn处理。
//         return _this.apply(this, arguments);     //执行原函数
//     }
// }

Function.prototype.before = function (fn) {
    return (...arguments) => {
        fn(...arguments)
        return this(...arguments)
    }
}

Function.prototype.after = function (fn) {
    return (...arguments) => {
        const r = this(...arguments)
        fn(...arguments)
        return r
    }
}

// Function.prototype.after = function (fn) {
//     var _this = this;
//     return function () {
//         var r = _this.apply(this, arguments); //先执行原函数，也就是myFunc
//         fn.apply(this, arguments);   //再执行新函数
//         return r;
//     }
// }

myFunc = myFunc.before(arr => {
    console.log('before');
    console.log(arr);   //输出 [3, 2, 1, 6, 2, 7, 4]
    arr.sort();
}).after(() => {
    console.log('after')
})


myFunc([3, 2, 1, 6, 2, 7, 4, 5]);   //先输出2,再输出1,最后输出3