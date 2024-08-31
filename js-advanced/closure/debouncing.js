//Challenge : Debouncing Scroll Event

function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

window.addEventListener('scroll', debounce(() => {
    console.log('Scroll event debounced!');
}, 200));
