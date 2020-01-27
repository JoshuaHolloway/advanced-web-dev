function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

// function upperCaseName(name) {
//     return name.toUpperCase();
// }

const josh_1 = greet("Tim", function (name) {
    return name.toUpperCase();
});
alert(josh_1);


const josh_2 = greet("Tim", function (name) {
    return name + "!!!!"
});
alert(josh_2);