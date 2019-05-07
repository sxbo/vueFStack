//屏幕自适应
;(function(doc, win){
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
        reCalc = function(e) {
            var clientWidth = docE1.clientWidth;
            if (!clientWidth)
                return;
            docE1.style.fontSize = 10 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, reCalc, false);
    doc.addEventListener('DOMContentLoaded', reCalc, false);
})(document, window);