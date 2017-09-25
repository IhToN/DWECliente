// ej4.10
function cabeceras() {
    for (var i = 1; i <= 6; i++) {
        document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
    }
}

document.write("<br /><h1>Práctica del bucle for</h1>");
cabeceras();

// ej4.11
function tablaBlanca(columnas) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
    document.write("<tr bgcolor='white'>");
    for (var i = 1; i <= columnas; i++)
        document.write("<td width='50' height='50'>&nbsp;</td>")
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla</h1>");
tablaBlanca(4);

// ej4.12
function tablaBlancoNegro(columnas) {
    document.write("<table border='0' cellspacing='2' bgcolor='black' width='200'>");
    document.write("<tr bgcolor='white'>");
    for (var i = 1; i <= columnas; i++)
        document.write("<td width='50' height='50' bgcolor='" + ((i % 2 === 0) ? 'white' : 'black') + "'>&nbsp;</td>")
    document.write("</tr>");
    document.write("</table>");
}

document.write("<br /><h1>Práctica de la Tabla en Blanco y Negro</h1>");
tablaBlancoNegro(4);