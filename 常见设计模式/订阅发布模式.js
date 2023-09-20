class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(name,cb) {
        this.events[name] ? this.events[name].push(cb) : this.events[name] = [cb]
    }

    trigger(name,...args) {
        if (!this.events[name]) return
        this.events[name].forEach(cb => {
            cb(...args)
        })
    }
}

let e = new EventEmitter();
e.on('success', () => {
    console.log('更新消息中心');
});
e.on('success', () => {
    console.log('更新订单信息');
});
e.on('success', () => {
    console.log('通知管理员');
});
e.trigger('success');


