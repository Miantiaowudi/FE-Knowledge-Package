// 中介者模式是指对象和对象之间借助第三方中介者进行通信.中介模式使各个对象之间得以解耦，
// 以中介者和对象之间的一对多关系取代了对象之间的网状多对多关系。各个对象只需关注自身的实现，对象之间的交互关系交给了中介者来实现和维护。
// 一场测试结束后, 公布结果: 告知解答出题目的人挑战成功, 否则挑战失败。

const player = function (name) {
    this.name = name
    playerMiddle.add(name)
}

player.prototype.win = function () {
    playerMiddle.win(this.name)
}

player.prototype.lose = function () {
    playerMiddle.lose(this.name)
}

//在这段代码中 A、B、C 之间没有直接发生关系, 而是通过另外的 playerMiddle 对象建立链接, 姑且将之当成是中介者模式了
const playerMiddle = (function () {
    const players = []
    const winArr = []
    const loseArr = []
    return {
        add: function (name) {
            players.push(name)
        },
        win: function (name) {
            winArr.push(name)
            if (winArr.length + loseArr.length === players.length) {
                this.show()
            }
        },
        lose: function (name) {
            loseArr.push(name)
            if (winArr.length + loseArr.length === players.length) {
                this.show()
            }
        },
        show: function () {
            for (let winner of winArr) {
                console.log(winner + '挑战成功;')
            }
            for (let loser of loseArr) {
                console.log(loser + '挑战失败;')
            }
        },
    }
}())

const a = new player('A 选手')
const b = new player('B 选手')
const c = new player('C 选手')

a.win()
b.win()
c.lose()


