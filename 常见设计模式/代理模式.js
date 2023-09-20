// 定义：为一个对象提供一个代用品或占位符，以便控制对它的访问。
// 代理对象和本体对象实现了同样的接口，并且会把任何方法调用传递给本体对象；

// 举例： 图片预加载、图片懒加载、合并HTTP请求（代理收集一定时间内的所有HTTP请求，然后一次性发给服务器）、
// 惰性加载（通过代理处理和收集一些基本操作，然后仅在真正需要本体的时候才加载本体）、缓存代理（缓存请求结果、计算结果）

//实现图片的懒加载
// 本体对象
const imgFunc = (function () {
    const imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc(src) {
            imgNode.src = src;
        }
    }
})();

// 代理对象
const proxyImage = (function () {
    const img = new Image();
    img.onload = function () {
        imgFunc.setSrc(this.src);
    };
    return {
        setSrc(src) {
            imgFunc.setSrc('./loading.gif');
            img.src = src;
        }
    };
})();

// 使用代理对象
proxyImage.setSrc('./reality.png');