function callback() {
    console.log("Coming from callback");
    alert("Coming from callback");
}

(function higherOrder(f) {
    console.log("About to call callback");
    f();
    console.log("Callback has been invoked");
})(callback);
// imediately invoked

// Above is same as calling function higherOrder with function callback as arg
// higherOrder(callback);