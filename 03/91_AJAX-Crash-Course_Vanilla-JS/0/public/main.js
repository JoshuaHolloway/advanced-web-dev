// create an event listhener
const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('button clicked');

    const XHR = new XMLHttpRequest();

    // OPEN - type, url/file, async
    console.log(XHR);

    // Open - type, url/file, async
    const ASYNC = true;
    XHR.open('GET', 'sample.txt', ASYNC);

    XHR.onload = function () {
        console.log('Inside onload');

        // Check status of response
        const OK = 200;
        const FORBIDDEN = 403;
        const NOT_FOUND = 404;
        if (this.status === OK) {
            console.log('this.status === 200');
            console.log(this.responseText);
        }
    };

    // Sends request
    XHR.send();
});