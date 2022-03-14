let isScrolling = null;
let newScrollSessionStarted = false;

window.addEventListener('scroll', (e) => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        logEventUtil('endBrowsingScroll');
        newScrollSessionStarted = false;
    }, 150)
}, false);

const onScrollStart = () => {
    if (!newScrollSessionStarted) {
        logEventUtil('startBrowsingScroll');
        newScrollSessionStarted = true;
    }
};