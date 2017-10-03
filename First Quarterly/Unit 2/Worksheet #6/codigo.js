// 2

var nImagenes = () => {
    return document.images.length;
};
console.log("Cantidad de Imágenes: " + nImagenes());

var firstImageId = () => {
    let elem = document.images.item(0);
    if (elem != null && elem.id != undefined) return elem.id;
    return "none";
};
console.log("ID de la Primera Imagen: " + firstImageId());

var nLinks = () => {
    return document.links.length;
};
console.log("Cantidad de Links: " + nLinks());

var cambiarTitle = (new_title) => {
    document.title = new_title;
};
cambiarTitle("Pepeluí");
console.log("Título cambiado a Pepeluí");