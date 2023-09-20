class Lazyman {
    constructor() {
        this.head = null
        setTimeout(() => {
            this.cur = this.head()
        }, 0);
        this.head = this.init
    }

    init() {
        return new Promise((resolve) => {
            console.log('init lazyman');
            resolve()
        })
    }

    sleepFirst(delay) {
        const temp = this.head
        this.head = () => {
            return new Promise((resolve) => {
                console.log('sleepfirst');
                setTimeout(() => {
                    resolve()
                }, delay);
            })
        }
        return this
    }

    sleep(delay) {
        setTimeout(() => {
            this.cur = this.cur.then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve
                    }, delay);
                })
            })
        }, 0);
        return this
    }

    eat() {
        setTimeout(() => {
            this.cur = this.cur.then(() => {
                return new Promise((resolve) => {
                    console.log('im eating');
                    resolve()
                })
            })
        }, 0);
        return this
    }
}
// const man = new Lazyman()
// man.eat().sleep(1000).sleepFirst(2000).eat()

class LazyMan {
    constructor(name) {
        this.name = name
        this.task = []      // 任务队列
        this.sleepfirst = false
        console.log(`My name is ${name}`)

        // 这里使用异步调用next()是为了确保所有链式调用都被添加到task[]才开始执行任务
        setTimeout(() => {
            this.next()
        }, 0)
    }

    sleep(time) {
        this.task.push(() => {
            console.log(`I am sleeping...`)
            setTimeout(() => {
                console.log(`after ${time} ms`)
                this.next()
            }, time)

        })
        return this
    }

    eat(food) {
        this.task.push(() => {
            console.log(`I am eating ${food}`)
            this.next()
        })
        return this
    }

    next() {
        let fn = this.task.shift()
        fn && fn()  // if(fn) fn()
    }

    sleepFirst(time) {
        if (this.sleepfirst) return this
        this.sleepfirst = true
        this.task.unshift(() => {
            setTimeout(() => {
                console.log(`sleepFirst for ${time}ms`);
                this.next()
            }, time);
        })
        return this
    }
}

const lazyMan = new LazyMan('jack')
lazyMan.eat('apple').sleep(5000).eat('hamburger').sleep(3000).eat('pear').sleepFirst(1000).sleepFirst(2000)