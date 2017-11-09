let initCatClicker = () => {
    let catBoxes = document.getElementsByClassName("catboxes");

    if (catBoxes) {
        Array.prototype.forEach.call(catBoxes, (catbox, id) => {
            let nImages = catbox.hasAttribute("nimages") ? parseInt(catbox.getAttribute("nimages")) : 3;
            for (let i = 0; i < nImages; i++) {
                let div = document.createElement('div');
                div.className = "catbox";
                catbox.appendChild(div);
            }
        });
        loadBoxes();
    }
};

let loadBoxes = () => {
    let catBoxes = document.getElementsByClassName("catbox");
    Array.prototype.forEach.call(catBoxes, (catbox, id) => {
        let imageString = '<img img-id="' + id + '" img-clicks="0" class="catimage" src="http://place-hoff.com/40' + Math.floor(Math.random() * 9) + '/30' + Math.floor(Math.random() * 9) + '" />';
        let text = '<br/><div class="cattext img' + id + '"></div>';

        catbox.innerHTML += imageString;
        catbox.innerHTML += text;
    });

    listenEvents();
};

let listenEvents = () => {
    let catImages = document.getElementsByClassName("catimage");
    Array.prototype.forEach.call(catImages, (catimage) => {
        catimage.addEventListener("click", (evt) => {
            let imgid = evt.target.getAttribute("img-id");
            let imgclicks = parseInt(evt.target.getAttribute("img-clicks"));
            let text = document.querySelector(".cattext.img" + imgid);
            evt.target.setAttribute("img-clicks", ++imgclicks + "");
            text.innerHTML = "David Hasselhoff #" + imgid + " - Veces clickado: " + imgclicks;
        });
    });
};

window.addEventListener("load", initCatClicker);