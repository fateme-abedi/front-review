//challenge : create function that Throttling scroll event

function throttle(fn, wait) {
    let lastCallTime = 0;

    return function(...args) {
        const now = Date.now();

        if (now - lastCallTime >= wait) {
            lastCallTime = now;
            fn(...args);
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    console.log('Scroll event throttled!');
}, 200));
