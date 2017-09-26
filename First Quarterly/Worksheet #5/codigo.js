// ej4.10
function cabeceras() {
    for (var i = 1; i <= 6; i++) {
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
    for (var i = 1; i <= columnas; i++)
        document.write("<td width='" + ancho + "' height='" + alto + "'>&nbsp;</td>")
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla</h1>");
pintarTabla(true);

// ej4.12
function pintarTablaBlancaNegra(columnas, ancho, alto) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='" + (ancho * columnas) + "'>");
    document.write("<tr bgcolor='white'>");
    for (var i = 1; i <= columnas; i++)
        document.write("<td width='" + ancho + "' height='" + alto + "' bgcolor='" + ((i % 2 === 0) ? 'white' : 'black') + "'>&nbsp;</td>")
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla en Blanco y Negro</h1>");
pintarTabla(false);