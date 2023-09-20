// //原型链继承
// /* 引用类型的属性被所有实例共享
// 在创建Child 的实例时， 不能向Person传参 */
// function Person() {
//     this.name = 'xiaopao';
//     this.colors = ['red', 'blue', 'green'];
// }
// Person.prototype.getName = function () {
//     console.log(this.name);
// }

// function Child() {

// }

// Child.prototype = new Person();
// var child1 = new Child();
// var child2 = new Child();
// child1.colors.push('yellow');
// console.log(child1.colors);
// console.log(child2.colors);

// //借用构造函数继承
// /*  1.避免了引用类型的属性被所有实例共享
//     2.可以在Child中向Parent传参
// 缺点：
//     1.只是子类的实例，不是父类的实例
//     2.方法都在构造函数中定义，每次创建实例都会创建一遍方法 */
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.getName = function () {
//     console.log(this.name);
// }

// function Child(name) {
//     Person.call(this, name);
// }

// var child1 = new Child('xiaopao');
// var child2 = new Child('lulu');
// console.log(child1.name); // xiaopao
// console.log(child2.name); // lulu
// console.log(child1 instanceof Person); // false   不能识别是Person的实例

// //组合继承
// /*  优点：融合原型链继承和构造函数的优点，是JavaScript中最常用的继承模式
//     缺点：调用了两次父类构造函数
// （组合继承最大的问题是无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部） */

// function Parent(name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green'];
// }

// Parent.prototype.getName = function () {
//     console.log(this.name);
// }

// function Child(name, age) {
//     Parent.call(this, name);// 第二次调用 Parent()
//     this.age = age;
// }

// Child.prototype = new Parent(); // 第一次调用 Parent()

// var child1 = new Child('xiaopao', 18);
// var child2 = new Child('lulu', 19);
// child1.getName(); // xiaopao
// child2.getName(); // lulu
// console.log(child1.age); // 18
// console.log(child2.age); // 19
// child1.colors.push('yellow');
// console.log(child1.colors);  // ["red", "blue", "green", "yellow"]
// console.log(child2.colors); // ["red", "blue", "green"]
// console.log(child1 instanceof Child); // true
// console.log(child1 instanceof Parent); // true
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "green", "blue"];
}
SuperType.prototype.sayName = function () {
    alert(this.name);
};
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

// 下面这部分替代给子类原型赋值的过程，不调用父类构造函数，直接继承父类原型
var prototype = Object.create(SuperType.prototype);
prototype.constructor = SubType;
SubType.prototype = prototype;

SubType.prototype.sayAge = function () {
    alert(this.age);
}
console.log(SubType)
