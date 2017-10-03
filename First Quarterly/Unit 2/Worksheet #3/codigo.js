// 1
var invierteCadena = (cad_arg) => {
    let ret = '';
    for (let i = cad_arg.length - 1; i >= 0; i--) ret += cad_arg[i];
    return ret;
};
console.log(invierteCadena('hola jose, apruébame'));

var inviertePalabras = (cad_arg) => {
    let split = cad_arg.split(' ');
    let ret = '';
    for (let i = split.length - 1; i >= 0; i--) ret += split[i] + ' ';
    return ret.trim();
};
console.log(inviertePalabras('hola jose, apruébame'));

var encuentraPalabraMasLarga = (cad_arg) => {
    let split = cad_arg.split(' ');
    let max_lon = 0;
    for (palabra of split) if (palabra.length > max_lon) max_lon = palabra.length;
    return max_lon;
};
console.log(encuentraPalabraMasLarga('hola jose, apruébame'));

var fltraPalabrasMasLargas = (cad_arg, i) => {
    let split = cad_arg.split(' ');
    let cont = 0;
    for (palabra of split) if (palabra.length > i) cont++;
    return cont;
};
console.log(fltraPalabrasMasLargas('hola jose, apruébame', 4));

var cadenaBienFormada = (cad_arg) => {
    /*let ret = cad_arg[0].toUpperCase();
    for (let i = 1; i < cad_arg.length; i++) ret += cad_arg[i].toLowerCase();
    return ret;
    */
    return ret = cad_arg[0].toUpperCase() + cad_arg.toLowerCase().substr(1, cad_arg.length);
};
console.log(cadenaBienFormada('hola jose, apruébame'));

// 2
var allUpper = (cad_arg) => {
    for (char of cad_arg) if (char === char.toUpperCase()) return false;
    return true;
};
var allLower = (cad_arg) => {
    for (char of cad_arg) if (char === char.toLowerCase()) return false;
    return true;
};
var infoCadena = (cad_arg) => {
    if (allUpper(cad_arg)) return 'All uppercase';
    else if (allLower(cad_arg)) return 'All lowercase';
    else return 'Mixture pa loh paharo';
};
console.log(infoCadena('hola jose, apruébame'));

// 7
var esPalindromo = (cad_arg) => {
    let lower = cad_arg.toLowerCase();
    for (let i = 0; i < lower.length; i++) if (lower[i] != lower[lower.length - i - 1]) return false;
    return true;
};
console.log(esPalindromo("otto"));

// 9
var tablaPalabra = (cad_arg) => {
    document.write("<table>");

    document.write("<tr>");
    for (char of cad_arg) document.write(`<td>${char}</td>`);
    document.write("</tr>");

    for (let i = 1; i < cad_arg.length - 1; i++) {
        document.write("<tr>");
        document.write(`<td>${cad_arg[i]}</td>`);
        for (let j = 0; j < cad_arg.length - 2; j++) document.write('<td></td>');
        document.write(`<td>${cad_arg[cad_arg.length - i - 1]}</td>`);
        document.write("</tr>");
    }

    document.write("<tr>");
    for (char of invierteCadena(cad_arg)) document.write(`<td>${char}</td>`);
    document.write("</tr>");

    document.write("</table>");
};
tablaPalabra("JOSE, APRUEBAME");