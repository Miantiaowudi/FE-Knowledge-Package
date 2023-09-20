function debounce(callback, wait) {
    // 用来保存定时器任务的标识id
    let timeoutId = null
    // 返回一个事件监听函数(也就是防抖函数)
    return function (event) {
        // 清除未执行的定时器任务
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        // 启动延迟 await 时间后执行的定时器任务
        timeoutId = setTimeout(() => {
            // 调用 callback 处理事件
            callback.call(this, event)
            // 处理完后重置标识
            timeoutId = -1
        }, wait)
    }
}

function debounce(fn, wait) {
    // 用来保存定时器任务的标识id
    let timer = null
    // 返回一个事件监听函数(也就是防抖函数)
    return function () {
        // 清除未执行的定时器任务
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, wait)
    }
}

function throttle(fn, wait) {
    let start = 0
    // 返回一个事件监听函数(也就是节流函数)
    return function () {
        // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数
        const current = Date.now()
        if (current - start > wait) {
            fn()
            start = current
        }
    }
}