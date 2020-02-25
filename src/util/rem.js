(function (doc, win) {
    let docEl = doc.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    /*
        遍历window对象中是否有orientationchange属性，
        如果有就执行orientationchange这个属性，如果没有就执行resize这个属性。
        获取window对象中的属性作为事件监听的对象。

    */
    let recalc = function () {//写获取视口宽的方法作为事件监听的函数。
        let clientWidth = docEl.clientWidth || window.innerWidth;
        if (!clientWidth) return
        docEl.style.fontSize = 12* (clientWidth / 375) + 'px'
        console.log(docEl.style.fontSize);
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)


/*
事件监听：
window.addEventListener(绑定事件对象,事件方法,ture代表事件捕获，false代表事件冒泡);

*/


//document.clientWidth;
//window.innerWidth




// (function (doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function () {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             if (clientWidth >= 750) {
//                 docEl.style.fontSize = '100px';
//             } else {
//                 docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
//             }
//         };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);
