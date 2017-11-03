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



// 6