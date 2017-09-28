// Exercise 1 - The Age Calculator
var year = new Date().getFullYear();
var annoNacimiento = '1985';
var annos = year - annoNacimiento;
var annos2 = year - annoNacimiento - 1;
document.write('They are either ' + annos + ' or ' + annos2 + ',substituting the values');

// Exercise 2 - The LifeTime Supply Calculator
var currentAge = 29;
var maxAge = 99;
var eatEstimatedPerDay = 1.5; // Kg

var comidaTotalRestoVida = (maxAge - currentAge) * eatEstimatedPerDay;
document.write('<br/>You will need ' + comidaTotalRestoVida + ' to last you until the ripe old age of ' + maxAge);

// Exercise 3 - The Geometrizer
var radio = 5;
var area = Math.PI * radio * radio;
var circunferencia = Math.PI * 2 * radio;

document.write('<br>The circumfrence is ' + circunferencia + ' m.');
document.write('<br>The area is ' + area + ' m2.');


// Exercise 4 - The temperature Converter
var celsius = 20;
var celsiusToFarenheit = celsius * 9 / 5 + 32;

var farenheit = 68;
var farenheiToCelsius = (farenheit - 32) * 5 / 9;

document.write('<br/>' + celsius + 'º Celsius a Farenheit: ' + celsiusToFarenheit);
document.write('<br/>' + farenheit + 'º Farenheit a Celsius: ' + farenheiToCelsius);

/*Exercise 1 - What number's bigger?
......
*/
function greaterNum(num1, num2) {
	var mayor = num1;
	if (num2 > num1)
		mayor = num2;
	
	return mayor;
}

document.write('El mayor es: ' + greaterNum(2, 5));

// Exercise 2 - The World Translator
function helloWorld(language) {
	var saludo = '';
	switch (language) {
		case 'es':
			saludo = 'Hola mundo';
			break;
		case 'fr':
			saludo = 'Bonjour le monde';
			break;
		case 'de':
			saludo = 'Hallo Welt';
			break;
		default:
			saludo = 'Debe especificar algún lenguaje para ' + saludo + ' (es, fr, de)';
	}
	
	return saludo;
}

document.write('<br/>' + helloWorld('es'));