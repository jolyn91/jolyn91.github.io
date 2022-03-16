let isScrolling = null;
let logNow = true;
let id;

window.addEventListener('scroll', (e) => {
    if(logNow) {
        logEventUtil('scrollStartEvent');
        logNow = false
    }
    clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
        logNow = true;
        logEventUtil('scrollStopEvent');
    }, 500);
}, false);