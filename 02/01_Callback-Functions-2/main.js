function sendMessage(message, callback) {
    alert("Coming from callback");

    //callback(message);

    // Can also return invocation to assign it
    return callback(message);
}

sendMessage("Message for console", console.log);

sendMessage("Message 2", alert)


// assign function invocation to variable
let answer = sendMessage("Are you sure???", confirm);
