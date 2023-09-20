//观察者模式：监控一个对象的状态，一旦状态发生变化，马上触发技能
/* 1.创建被观察者 
    => 属性，自身状态
    => 队列，记录观察自己的人，数组[]
    => 方法，能设置自身状态，需要改变状态时，触发方法
    => 方法，添加观察者
    => 方法，删除观察者

    2.创建观察者
    => 需要身份证明
    => 需要技能
*/

//观察者构造函数
class Observer {
    constructor(name, fn = () => { }) {
        this.name = name
        this.fn = fn
    }
}

//创建观察者
const bzr = new Observer('班主任', (state) => { console.log('因为' + state + '找家长') })
const njzr = new Observer('年级主任', (state) => { console.log('因为' + state + '你是哪个班的') })
const xz = new Observer('校长', (state) => { console.log('因为' + state + '责备班主任') })

//被观察者的构造函数
class Subject {
    constructor(state) {
        //记录状态
        this.state = state
        //数组用拉力保存观察的人
        this.observers = []
    }

    //设置自己的状态
    setState(val) {
        this.state = val

        //遍历触发观察者的技能
        this.observers.forEach(item => {
            //状态传给观察者
            item.fn(this.state)
        })
    }

    addObserver(obs) {
        // const res = this.observers.some(item => item === obs)
        // const res = this.observers.find(item => item === obs)
        // const res = this.observers.findIndex(item => item === obs)
        // const res = this.observers.indexOf(obs)
        this.observers = this.observers.filter(item => item !== obs)
        this.observers.push(obs)
    }

    delObserver(obs) {
        this.observers = this.observers.filter(item => item !== obs)
    }


}

const xiaoming = new Subject('学习')
xiaoming.addObserver(bzr)
xiaoming.addObserver(xz)
xiaoming.addObserver(njzr)
// xiaoming.addObserver(bzr)
console.log(xiaoming)
xiaoming.setState('打游戏')