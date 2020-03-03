function smoothScroll(target, duration) {
    const Target = document.querySelector(target);
    const targetPos = Target.getBoundingClientRect().top;
    console.log('targetPos = ', targetPos);

    // Position relative to window
    const startPos = window.pageYOffset;
    console.log('startPos = ', startPos);

    const distance = targetPos - startPos;
    console.log('distance = ', distance);

    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run); // x,y
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // cubic easing in/out :: http://gizma.com/easing/
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };


    requestAnimationFrame(animation);
}



//smoothScroll('.section1', 1000);
let section1 = document.querySelector('.section1');
section1.addEventListener('click', () => {
    smoothScroll('.section1', 1000);
});