let XHR = new XMLHttpRequest();
XHR.onreadystatechange = () => {
    console.log('READY STATE IS...' + XHR.readyState);

    // is request done [readyState == 4]?
    if (XHR.readyState == 4) {
        // was status code OK [status == 200]??
        if (XHR.status == 200) {
            console.log(XHR.responseText);
        } else { console.log('JOSH: ERROR!'); }
    }

};

XHR.open('GET', 'https://api.github.com/zen');
XHR.send();