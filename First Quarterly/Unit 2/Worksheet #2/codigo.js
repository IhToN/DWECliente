// 1
console.log(Math.round(Math.random()));
console.log(Math.floor(Math.random() * (200 - 100)) + 100);

var getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
console.log(getRandom(1000, 2000));

// 5
var funcionSegundoGrado = (a, b, c) => {
    let sol1 = (-b + (Math.sqrt((b ** 2) - 4 * a * c))) / (2 * a);
    let sol2 = (-b - (Math.sqrt((b ** 2) - 4 * a * c))) / (2 * a);
    return [sol1, sol2];
};
console.log(funcionSegundoGrado(3, 4, 5));

// 7
var senosHasta = (numero) => {
    document.write("<table>");
    for (let i = 0; i <= numero; i++) {
        document.write("<tr>");
        document.write("<td>" + $i + "</td>");
        document.write("<td>" + Math.sin($i * (180 / Math.PI)) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
};

senosHasta(180);

// 8
var imagenAleatoria = () => {
    let imagenes = ['https://lh3.googleusercontent.com/-VHV916run58/WC9To_x72tI/AAAAAAAACkE/f59cQ9_9-XY/safe_image_thumb.gif?imgmax=800']
}