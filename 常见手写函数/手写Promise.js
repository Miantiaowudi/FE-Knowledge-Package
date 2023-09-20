function Promise(executor) {
    this.PromiseState = 'pending'
    this.PromiseResult = null
    //声明属性
    this.callbacks = []

    const self = this //保存实例对象的this

    //resolve函数
    function resolve(data) {
        // 1.修改对象状态  2.设置结果值
        if (self.PromiseState !== 'pending') return 
        self.PromiseState = 'fulfilled'
        self.PromiseResult = data
        //调用成功的回调函数
        self.callbacks.forEach(item => {
            item.onResolved(data)
        })
    }

    //reject函数
    function reject(data) {
        if (self.PromiseState !== 'pending') return
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        if (self.callback.onRejected) {
            self.callback.onRejected(data)
        }
        self.callbacks.forEach(item => {
            item.onRejected(data)
        })
    }

    //同步调用执行器函数
    try {
        executor(resolve,reject)
    } catch (e) {
        reject(e)
    }
}

//then方法
Promise.prototype.then = function (onResolved, onRejected) {
    return new Promise((resolve, reject) => {
        if (this.PromiseState === 'fulfilled') {
            //获取回调函数的执行结果
            let result = onResolved(this.PromiseResult)
            if (result instanceof Promise) {
                result.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            } else {
                //结果的对象状态变为【成功】
                resolve(result)
            }
        }
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult)      
        }
        //对于pending状态的处理
        if (this.PromiseState === 'pending') {
            //保存回调函数
            this.callbacks.push({
                onResolved,
                onRejected
            })
        }
    })
}

