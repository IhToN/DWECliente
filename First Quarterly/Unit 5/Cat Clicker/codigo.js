let hasselhoffs = [];

class Haselhoff {
    constructor(id, src) {
        this.id = id;
        this.src = src;
        this.clicks = 0;
    }

    getButton() {
        return '<button class="catbutton" img-id="' + this.id + '">Hasselhoff #' + this.id + '</button>';
    }

    getHTML() {
        let imageString = '<img img-id="' + this.id + '" img-clicks="' + this.clicks + '" class="catimage" src="' + this.src + '" />';
        let text = '<br/><div class="cattext img' + this.id + '">David Hasselhoff #' + this.id + ' - Veces clickado: ' + this.clicks + '</div>';
        return imageString + text;
    }
}

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
        let hoff = new Haselhoff(id, 'http://place-hoff.com/40' + Math.floor(Math.random() * 9) + '/30' + Math.floor(Math.random() * 9));
        hasselhoffs[id] = hoff;
        catbox.innerHTML = hoff.getButton();
    });

    listenEvents();
};

let listenEvents = () => {
    listenEventsButtons();
    listenEventsImages();
};

let listenEventsButtons = () => {
    let catButtons = document.getElementsByClassName("catbutton");
    Array.prototype.forEach.call(catButtons, (catbutton) => {
        catbutton.addEventListener("click", (evt) => {
            let displaybox = document.getElementById('displaybox');

            let imgid = evt.target.getAttribute("img-id");
            let hoff = hasselhoffs[imgid];

            displaybox.innerHTML = hoff.getHTML();
            listenEventsImages();
        });
    });
};

let listenEventsImages = () => {
    let catImages = document.getElementsByClassName("catimage");
    Array.prototype.forEach.call(catImages, (catimage) => {
        catimage.addEventListener("click", (evt) => {
            let imgid = evt.target.getAttribute("img-id");
            let hoff = hasselhoffs[imgid];

            let text = document.querySelector(".cattext.img" + imgid);
            evt.target.setAttribute("img-clicks", ++hoff.clicks + "");
            text.innerHTML = "David Hasselhoff #" + imgid + " - Veces clickado: " + hoff.clicks;
        });
    });
};

window.addEventListener("load", initCatClicker);