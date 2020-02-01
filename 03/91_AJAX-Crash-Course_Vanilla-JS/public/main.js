// create an event listhener
const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('button clicked');

    const XHR = new XMLHttpRequest();

    // OPEN - type, url/file, async
    console.log(XHR);
});