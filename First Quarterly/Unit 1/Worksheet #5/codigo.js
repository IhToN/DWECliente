// ej4.10
function cabeceras() {
    for (let i = 1; i <= 6; i++) {
        document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
    }
}

document.write("<br /><h1>Práctica del bucle for</h1>");
cabeceras();

// ej4.11
function pintarArray(blanca) {
    let col = window.prompt("Introduce el número de columnas");
    let anc = window.prompt("Introduce el ancho de las celdas");
    let alt = window.prompt("Introduce el alto de las celdas");
    if (isNaN(col) || isNaN(anc) || isNaN(alt)) {
        document.write("Has introducido algún valor incorrecto:<br /><ul>" +
            "<li>Nº Columnas: " + col + " - " + isNaN(col) + "</li>" +
            "<li>Ancho Columnas: " + anc + " - " + isNaN(col) + "</li>" +
            "<li>Alto Columnas: " + alt + " - " + isNaN(col) + "</li></ul>");
        return;
    }
    if (blanca)
        pintarArrayBlanco(col, anc, alt);
    else
        pintarArrayBlancoNegro(col, anc, alt);
}

function pintarArrayBlanco(columnas, ancho, alto) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='\"+(ancho * columnas)+\"'>");
    document.write("<tr bgcolor='white'>");
    for (let i = 1; i <= columnas; i++)
        document.write("<td width='" + ancho + "' height='" + alto + "'>&nbsp;</td>");
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla</h1>");
pintarArray(true);

// ej4.12
function pintarArrayBlancoNegro(columnas, ancho, alto) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='" + (ancho * columnas) + "'>");
    document.write("<tr bgcolor='white'>");
    for (let i = 1; i <= columnas; i++)
        document.write("<td width='" + ancho + "' height='" + alto + "' bgcolor='" + ((i % 2 === 0) ? 'white' : 'black') + "'>&nbsp;</td>");
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla en Blanco y Negro</h1>");
pintarArray(false);

// ej4.13
function pintarArrayWhile(blanca) {
    let col = window.prompt("Introduce el número de columnas");
    let anc = window.prompt("Introduce el ancho de las celdas");
    let alt = window.prompt("Introduce el alto de las celdas");
    if (isNaN(col) || isNaN(anc) || isNaN(alt)) {
        document.write("Has introducido algún valor incorrecto:<br /><ul>" +
            "<li>Nº Columnas: " + col + "</li>" +
            "<li>Ancho Columnas: " + anc + "</li>" +
            "<li>Alto Columnas: " + alt + "</li></ul>");
        return;
    }
    if (blanca)
        pintarArrayBlancoWhile(col, anc, alt);
    else
        pintarArrayBlancoNegroWhile(col, anc, alt);
}

function pintarArrayBlancoWhile(columnas, ancho, alto) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='\"+(ancho * columnas)+\"'>");
    document.write("<tr bgcolor='white'>");
    let i = 1;
    while (i <= columnas) {
        document.write("<td width='" + ancho + "' height='" + alto + "'>&nbsp;</td>");
        i++;
    }
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla - While</h1>");
pintarArrayWhile(true);

// ej4.14
function pintarArrayBlancoNegroWhile(columnas, ancho, alto) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='" + (ancho * columnas) + "'>");
    document.write("<tr bgcolor='white'>");
    let i = 1;
    while (i <= columnas) {
        document.write("<td width='" + ancho + "' height='" + alto + "' bgcolor='" + ((i % 2 === 0) ? 'white' : 'black') + "'>&nbsp;</td>");
        i++;
    }
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla en Blanco y Negro - While</h1>");
pintarArrayWhile(false);

// ej4.15
function checkNum(num_adivinar, num) {
    if (num < num_adivinar)
        alert('El número es mayor');
    else if (num > num_adivinar)
        alert('El número es menor');
}

function adivinarNum() {
    let num_adivinar = window.prompt("[Jugador 1] Introduce el número que quieres que adivinen.");
    let num = undefined;
    while (num !== num_adivinar) {
        num = window.prompt("[Jugador 2] Introduce un número. ¿Será el mismo?");
        checkNum(num_adivinar, num);
    }
    alert("¡Felicidades! ¡Has acertado el número!");
}

document.write("<br /><h1>Práctica de Adivinación de un Número</h1>");
adivinarNum();

// ej4.16
function adivinarNumDoWhile() {
    let num_adivinar = window.prompt("[Jugador 1] Introduce el número que quieres que adivinen.");
    let num = undefined;
    do {
        num = window.prompt("[Jugador 2] Introduce un número. ¿Será el mismo?");
        checkNum(num_adivinar, num);
    } while (num !== num_adivinar);
    alert("¡Felicidades! ¡Has acertado el número!");
}

document.write("<br /><h1>Práctica de Adivinación de un Número - Do..While</h1>");
adivinarNumDoWhile();

// ej4.17
function tablasDeMultiplicar() {
    for (let i = 1; i <= 10; i++) {
        document.write("<h2>Tabla del " + i + "</h2>");
        for (let j = 0; j <= 10; j++) {
            document.write(i + "x" + j + "=" + i * j + "<br />");
        }
    }
}

document.write("<br /><h1>Práctica de Tablas de Multiplicar</h1>");
tablasDeMultiplicar();

// ej4.18
function pintarTabla() {
    let col = window.prompt("Introduce el número de columnas");
    let fil = window.prompt("Introduce el número de filas");
    let anc = window.prompt("Introduce el ancho de las celdas");
    let alt = window.prompt("Introduce el alto de las celdas");
    if (isNaN(col) || isNaN(fil) || isNaN(anc) || isNaN(alt)) {
        document.write("Has introducido algún valor incorrecto:<br /><ul>" +
            "<li>Nº Columnas: " + col + "</li>" +
            "<li>Nº Filas: " + fil + "</li>" +
            "<li>Ancho Columnas: " + anc + "</li>" +
            "<li>Alto Columnas: " + alt + "</li></ul>");
        return;
    }
    pintarTablaBlanca(col, fil, anc, alt);
}

function pintarTablaBlanca(col, fil, anc, alt) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='" + (anc * col) + "'>");

    for (let i = 1; i <= fil; i++) {
        document.write("<tr bgcolor='white'>");
        for (let j = 1; j <= col; j++) document.write("<td width='" + anc + "' height='" + alt + "'>&nbsp;</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

document.write("<br /><h1>Práctica de Tablas - Filas y Columnas</h1>");
pintarTabla();

// ej4.19
function pintarAjedrez() {
    let anc = window.prompt("Introduce el ancho de las celdas");
    if (isNaN(anc)) {
        document.write("Has introducido algún valor incorrecto:<br /><ul>" +
            "<li>Ancho Columnas: " + anc + "</li>");
        return;
    }
    pintarTablaAjedrez(anc);
}

function pintarTablaAjedrez(anc) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='" + (anc * 8) + "'>");

    for (let i = 1; i <= 8; i++) {
        document.write("<tr bgcolor='white'>");
        for (let j = 1; j <= 8; j++) document.write("<td width='" + anc + "' height='" + anc + "'" +
            " bgcolor='" + ((i % 2 === j % 2) ? 'white' : 'black') + "'>&nbsp;</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

document.write("<br /><h1>Práctica de Tablas - Filas y Columnas</h1>");
pintarAjedrez();