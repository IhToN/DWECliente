// 1
let allLinks = document.getElementsByTagName('a');
console.log("Enlaces totales: " + allLinks.length);
console.log("Link del penúltimo enlace: " + allLinks.length > 2 ? allLinks[allLinks.length - 2].href : allLinks[allLinks.length - 1].href);
console.log("Enlaces totales a Google: " + document.querySelectorAll("a[href*='google']").length);
console.log("Enlaces totales del tercer párrafo: " + document.querySelectorAll("p:nth-child(4) a").length);

// 4
let addelement = () => {
    let list = document.querySelector("ul.list");
    let newEntry = document.createElement('li');
    newEntry.appendChild(document.createTextNode("Elemento " + (list.childNodes.length)));
    list.appendChild(newEntry);
};
document.getElementById("addelement").addEventListener("click", addelement);

// 5
let addimage = () => {
    let list = document.getElementById('subirimagenes');
    let newEntry = document.createElement('input');
    newEntry.type = 'file';
    newEntry.name = 'imagen[]';
    newEntry.accept = 'image/*';
    list.appendChild(newEntry);
};
document.getElementById("addimage").addEventListener("click", addimage);


// 6
let images = ["http://place-hoff.com/300/400", "http://place-hoff.com/400/300", "http://place-hoff.com/300/300",
    "http://place-hoff.com/400/400"];
let cont = 0;

let previmg = () => {
    if (cont > 0) {
        document.getElementById('imgslider').src = images[--cont];
    }
};
let nextimg = () => {
    if (cont < images.length - 1) {
        document.getElementById('imgslider').src = images[++cont];
    }
};

document.getElementById("imganterior").addEventListener("click", previmg);
document.getElementById("imgsiguiente").addEventListener("click", nextimg);

window.addEventListener("load", () => {
    document.getElementById('imgslider').src = images[cont];
});