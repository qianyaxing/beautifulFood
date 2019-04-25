// 封装滚轮事件
function mouseWheel(obj, fn) {
    // 判断是否为火狐浏览器
    var ff = window.navigator.userAgent.indexOf('Firefox');

    if (ff == -1) {
        obj.onmousewheel = wheel;
    } else {
        obj.addEventListener("DOMMouseScroll", wheel);
    }
    // 封装滚轮上下
    function wheel(e) {
        e = e || window.event;
        // 声明计数器
        var down = true;
        // 如果是火狐，有detail没有wheelDelta
        if (e.detail) {
            // 是上还是下，在于detail < 0 ;
            down = e.detail > 0;
        } else {
            down = e.wheelDelta < 0;
        }
        // 执行回调函数
        fn && fn.apply(obj,[down,e]);
    }
}