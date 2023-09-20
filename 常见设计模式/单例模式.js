//单例模式，确保全局只有一个对象，避免多个对象之间的干扰，例如模态框、登录控件、注销控件
// function Person() {
//     this.name = 'Jack'
// }
// const p1 = new Person()
// const p2 = new Person()
// console.log(p1 == p2)   //false

//单例模式核心代码，采用自执行函数返回一个函数
const Person = (function () {
    function Person(name, age, gender, cb) {
        this.name = name
        this.age = age
        this.gender = gender
        this.callback = function () { }
    }

    Person.prototype.sayHi = function () {
        console.log('Hello World')
    }

    //采取闭包的形式把instance作为私有变量保存下来
    let instance = null

    return function (name, age, gender, cb) {
        if (!instance) instance = new Person(name, age, gender)

        instance.callback = cb || function () { }
        return instance
    }
})()
let num = 0
const p1 = new Person('Jack', 18, '男', () => { console.log(num++) })
const p2 = Person('Rose', 20, '女')
console.log(p1)
console.log(p2)
console.log(p1 === p2)  // true