// ej1
function greaterNum(num1, num2) {
    // return Math.max(num1, num2)
    if(num1 > num2)
        return num1;
    if(num2 >= num1)
        return num2;
}

console.log("The greater between 5 and 10 is " + greaterNum(5, 10));
console.log("The greater between 12.1 and 9.4 is " + greaterNum(12.1, 9.4));

// ej2
function helloWorld(langCode) {
    let msg = "Hello World";
    switch(langCode) {
        case "es":
            msg = "Hola mundo!";
            break;
        case "de":
            msg = "No se Alemán";
            break;
        case "en":
        default:
            break;
    }
    return msg;
}

console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("jajajatelahecolao"));