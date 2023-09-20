//函数柯里化用途 比如校验电话号码、校验邮箱、校验身份证号、校验密码等
// function checkByRegExp(regExp,string) {
//     return regExp.test(string);  
// }

// checkByRegExp(/^1\d{10}$/, '18642838455'); // 校验电话号码
// checkByRegExp(/^1\d{10}$/, '13109840560'); // 校验电话号码
// checkByRegExp(/^1\d{10}$/, '13204061212'); // 校验电话号码

// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@163.com'); // 校验邮箱
// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@qq.com'); // 校验邮箱
// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@gmail.com'); // 校验邮箱

// //进行柯里化
// let _check = curry(checkByRegExp);
// //生成工具函数，验证电话号码
// let checkCellPhone = _check(/^1\d{10}$/);
// //生成工具函数，验证邮箱
// let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

// checkCellPhone('18642838455'); // 校验电话号码
// checkCellPhone('13109840560'); // 校验电话号码
// checkCellPhone('13204061212'); // 校验电话号码

// checkEmail('test@163.com'); // 校验邮箱
// checkEmail('test@qq.com'); // 校验邮箱
// checkEmail('test@gmail.com'); // 校验邮箱



// /**
//  * 将函数柯里化
//  * @param fn    待柯里化的原函数
//  * @param len   所需的参数个数，默认为原函数的形参个数
//  */
//  function curry(fn,len = fn.length) {
//     return _curry.call(this,fn,len)
// }

// /**
//  * 中转函数
//  * @param fn    待柯里化的原函数
//  * @param len   所需的参数个数
//  * @param args  已接收的参数列表
//  */
// function _curry(fn,len,...args) {
//     return function (...params) {
//         let _args = [...args,...params];
//         if(_args.length >= len){
//             return fn.apply(this,_args);
//         }else{
//             return _curry.call(this,fn,len,..._args)
//         }
//     }
// }

const curry = (fn, ...args) => 
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args.slice(0, fn.length))
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curry(fn, ...args, ..._args);


let _fn = curry(function(a,b,c,d,e){
    console.log(a+b+c+d+e)
});
console.log(_fn)

_fn(1,2,3,4,5);     
_fn(1)(2)(3, 4, 5);
_fn(1,2)(3,4)(5);   
_fn(1)(2)(3)(4)(5); 