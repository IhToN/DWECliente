// ej3
var radius = window.prompt("Introduce el radio de un círculo");
console.log("The circumference is " + (2 * Math.PI * radius));
console.log("The area is " + (Math.PI * Math.pow(radius, 2)));

// ej4
var celsius = window.prompt("Introduce la temperatura en Celsius");
console.log(celsius + "ºC is " + (celsius * (9 / 5) + 32) + "ºF");

var fahrenheit = window.prompt("Introduce la temperatura en Fahrenheit");
console.log(fahrenheit + "ºF is " + ((fahrenheit - 32) / (9 / 5)) + "ºC");