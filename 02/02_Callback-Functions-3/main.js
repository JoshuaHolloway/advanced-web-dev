function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

let josh = greet("Tim", upperCaseName);

alert(josh);