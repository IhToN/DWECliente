// ej4.10
function cabeceras() {
    for (let i = 1; i <= 6; i++) {
        document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
    }
}

document.write("<br /><h1>Práctica del bucle for</h1>");
cabeceras();

// ej4.11
function pintarTabla(blanca) {
    let col = window.prompt("Introduce el número de columnas");
    let anc = window.prompt("Introduce el ancho de las celdas");
    let alt = window.prompt("Introduce el alto de las celdas");
    if (!Number.isInteger(col) || !Number.isInteger(anc) || !Number.isInteger(alt)) {
        document.write("Has introducido algún valor incorrecto:<br /><ul>" +
            "<li>Nº Columnas: " + col + "</li>" +
            "<li>Ancho Columnas: " + anc + "</li>" +
            "<li>Alto Columnas: " + alt + "</li></ul>");
        return;
    }
    if (blanca)
        pintarTablaBlanca(col, anc, alt);
    else
        pintarTablaBlancaNegra(col, anc, alt);
}

function pintarTablaBlanca(columnas, ancho, alto) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='\"+(ancho * columnas)+\"'>");
    document.write("<tr bgcolor='white'>");
    for (let i = 1; i <= columnas; i++)
        document.write("<td width='" + ancho + "' height='" + alto + "'>&nbsp;</td>");
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla</h1>");
pintarTabla(true);

// ej4.12
function pintarTablaBlancaNegra(columnas, ancho, alto) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='" + (ancho * columnas) + "'>");
    document.write("<tr bgcolor='white'>");
    for (let i = 1; i <= columnas; i++)
        document.write("<td width='" + ancho + "' height='" + alto + "' bgcolor='" + ((i % 2 === 0) ? 'white' : 'black') + "'>&nbsp;</td>");
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla en Blanco y Negro</h1>");
pintarTabla(false);

// ej4.13
function pintarTablaWhile(blanca) {
    let col = window.prompt("Introduce el número de columnas");
    let anc = window.prompt("Introduce el ancho de las celdas");
    let alt = window.prompt("Introduce el alto de las celdas");
    if (!Number.isInteger(col) || !Number.isInteger(anc) || !Number.isInteger(alt)) {
        document.write("Has introducido algún valor incorrecto:<br /><ul>" +
            "<li>Nº Columnas: " + col + "</li>" +
            "<li>Ancho Columnas: " + anc + "</li>" +
            "<li>Alto Columnas: " + alt + "</li></ul>");
        return;
    }
    if (blanca)
        pintarTablaBlancaWhile(col, anc, alt);
    else
        pintarTablaBlancaNegraWhile(col, anc, alt);
}

function pintarTablaBlancaWhile(columnas, ancho, alto) {
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
pintarTablaWhile(true);

// ej4.14
function pintarTablaBlancaNegraWhile(columnas, ancho, alto) {
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
pintarTablaWhile(false);

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

