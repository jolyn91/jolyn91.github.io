let isScrolling = null;
let newScrollSessionStarted = false;
let id;

window.addEventListener('scroll', (e) => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        logEventUtil('endBrowsingScroll', {id});
        newScrollSessionStarted = false;
    }, 150)
}, false);

const onScrollStart = () => {
    if (!newScrollSessionStarted) {
        id = Math.floor(Math.random() * 100000000000);
        logEventUtil('startBrowsingScroll', {id});
        newScrollSessionStarted = true;
    }
};