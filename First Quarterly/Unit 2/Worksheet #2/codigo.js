// 1
console.log(Math.round(Math.random()));
console.log(Math.floor(Math.random() * (200 - 100)) + 100);

var getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min)) + min;
};
console.log(getRandom(1000, 2000));

// 5
var funcionSegundoGrado = (a, b, c) => {
    let sol1 = parseFloat((-b + (Math.sqrt((b ** 2) - (4 * a * c)))) / (2 * a));
    let sol2 = parseFloat((-b - (Math.sqrt((b ** 2) - (4 * a * c)))) / (2 * a));
    return [sol1, sol2];
};
console.log(funcionSegundoGrado(1, -5, 6));

// 7
var senosHasta = (numero) => {
    document.write("<table>");
    for (let i = 0; i <= numero; i++) {
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + Math.sin(i * Math.PI / 180) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
};

senosHasta(180);

// 8
var imagenAleatoria = () => {
    let imagenes = ['https://lh3.googleusercontent.com/-VHV916run58/WC9To_x72tI/AAAAAAAACkE/f59cQ9_9-XY/safe_image_thumb.gif?imgmax=800',
        'https://images7.memedroid.com/images/UPLOADED973/596e4c96650e5.jpeg',
        'http://www.neobytesolutions.com/wp-content/gallery/programming-memes/git-meme.jpg'];
    document.write('<img src="' + imagenes[getRandom(0, imagenes.length - 1)] + '" style="display:block; margin:0 auto; width:100%; max-width: 450px;" />');
};

imagenAleatoria();