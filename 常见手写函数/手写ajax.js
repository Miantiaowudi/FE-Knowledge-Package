//ajax发送get请求
function sendMsg() {
    let xhr = new XMLHttpRequest()
    //open方法三个参数：请求的method，请求的url，是否异步（默认true），参数传递放在url后面
    xhr.open('get', 'url?name=xxx&password=xxx',)
    xhr.send()
    xhr.onreadystatechange = function () {
        //判断状态值 0 - 4 四种状态
        if (xhr.readyState === 4) {
            //判断状态码
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }
    }
}
//ajax发送post请求
function sendMsg1() {
    let xhr = new XMLHttpRequest()
    //open方法三个参数：请求的method，请求的url，是否异步（默认true），参数传递放在url后面
    xhr.open('post', 'url?name=xxx&password=xxx',)
    //设置请求头的content-type
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send('name=xxx&age=xxx')
    xhr.onreadystatechange = function () {
        //判断状态值 0 - 4 四种状态
        if (xhr.readyState === 4) {
            //判断状态码
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.responseText)
                console.log(response);
            }
        }
    }
}