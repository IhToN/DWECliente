let initCatClicker = () => {
    let catBoxes = document.getElementsByClassName("catbox");
    let id = 0;
    console.log(catBoxes);
    Array.prototype.forEach.call(catBoxes, (catbox) => {
        let imageString = '<img img-id="' + id + '" img-clicks="0" class="catimage" src="http://place-hoff.com/400/400" />';
        let text = '<br/><div class="cattext img' + id + '"></div>';

        catbox.innerHTML += imageString;
        catbox.innerHTML += text;
        id++;
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
            text.innerHTML = "Veces clickado: " + imgclicks;
        });
    });
};

window.addEventListener("load", initCatClicker);