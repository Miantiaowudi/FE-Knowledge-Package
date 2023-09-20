var b = 'window';
function c() {
    console.log(b)
    console.log(this.b)
}

var obj = {
    b: '1-1',
    c: function () {
        console.log(b)
        console.log(this.b)
        return {
            b: '1-2',
            c: function () {
                console.log(b)
                console.log(this.b)
            }
        }
    },
}
c() //window undefined
obj = obj.c() // window 1-1
obj.c = c
obj.c() // window 1-2

