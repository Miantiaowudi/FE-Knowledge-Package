/*  + 一个问题匹配多个解决方案，不一定用到哪一个，例如：表单效验（是否为空、长度、手机号、邮箱等等）
    + 而且有可能随时还会增加多个方案
    + 例子：购物车结算
        => 满100减20
        => 满200减50
        => 8折
    + 把多种方案，以闭包的形式保存起来 对外留一个接口，可以添加和减少
*/

const calcPrice = (function () {
    const sale = {
        '100-10': function (price) { return price -= 10 },
        '200-25': function (price) { return price -= 25 },
        '80%': function (price) { return price *= 0.8 }
    }
    function calcPrice(type, price) {
        if (!sale[type]) return '没有这个折扣'
        return sale[type](price)
    }

    calcPrice.add = function (type, fn) {
        if (sale[type]) return '该折扣已经存在'
        sale[type] = fn
        return '添加成功'
    }

    calcPrice.del = function (type) {
        delete sale[type]
    }

    return calcPrice
})()