var largestNumber = (numeros) => numeros.sort().pop();
var longestWord = (palabras) => palabras.sort((a, b) => a.length - b.length).pop();
var evenNumbers = (numeros) => numeros.filter(a => a%2==0);
var oddNumbers = (numeros) => numeros.filter(a => a%2==1);
var containWord = (palabras, word='is') => palabras.filter(a => a.includes(is));
var allNumbersDivisible3 = (palabras) => palabras.filter(a => a%3 != 0).size() == 0;
var zipTwoArrays = (arr1, arr2) => arr1.concat(arr2);
var sortGreater = (palabras) => palabras.sort((a, b) => a.length - b.length);
var removeFirstWord = (palabras) => palabras.subarray(1, palabras.length-1);
var addFirstWord = (palabras, palabra) => palabras.splice(0, 0, palabra);
var replace = (palabras, palabra, posicion) => palabras.splice(posicion, 1, palabra);
var namesWithJ = (nombres) => nombres.filter(a => a.indexOf('J') == 0).sort();