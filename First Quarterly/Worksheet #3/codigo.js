// ej3
function calcCircumfrence(radius) {
    return 2 * Math.PI * radius;
}

function calcArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

var radius = window.prompt("Introduce el radio de un círculo");
console.log("The circumference is " + calcCircumfrence(radius));
console.log("The area is " + calcArea(radius));

// ej4
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / (9 / 5);
}

var celsius = window.prompt("Introduce la temperatura en Celsius");
console.log(celsius + "ºC is " + celsiusToFahrenheit(celsius) + "ºF");

var fahrenheit = window.prompt("Introduce la temperatura en Fahrenheit");
console.log(fahrenheit + "ºF is " + fahrenheitToCelsius(fahrenheit) + "ºC");