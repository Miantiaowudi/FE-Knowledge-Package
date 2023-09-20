/* 场景: 某电商针对已付过定金的用户有优惠政策, 在正式购买后, 已经支付过 500 元定金的用户会收到 100 元的优惠券, 
200 元定金的用户可以收到 50 元优惠券, 没有支付过定金的用户只能正常购买。 */
// orderType: 表示订单类型, 1: 500 元定金用户；2: 200 元定金用户；3: 普通购买用户
// pay: 表示用户是否已经支付定金, true: 已支付；false: 未支付
// stock: 表示当前用于普通购买的手机库存数量, 已支付过定金的用户不受此限制

const order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购, 得到 100 元优惠券')
    } else {
        return 'nextSuccess'
    }
}

const order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200 元定金预购, 得到 50 元优惠券')
    } else {
        return 'nextSuccess'
    }
}

const orderCommon = function (orderType, pay, stock) {
    if (orderType === 3 && stock > 0) {
        console.log('普通购买, 无优惠券')
    } else {
        console.log('库存不够, 无法购买')
    }
}

// 链路代码
const chain = function (fn) {
    this.fn = fn
    this.sucessor = null
}

chain.prototype.setNext = function (sucessor) {
    this.sucessor = sucessor
}

chain.prototype.init = function () {
    const result = this.fn.apply(this, arguments)
    if (result === 'nextSuccess') {
        this.sucessor.init.apply(this.sucessor, arguments)
    }
}

const order500New = new chain(order500)
const order200New = new chain(order200)
const orderCommonNew = new chain(orderCommon)

order500New.setNext(order200New)
order200New.setNext(orderCommonNew)

order500New.init(3, true, 500) // 普通购买, 无优惠券
