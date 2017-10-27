// 1
var swapStyle = (event) => {
    let style = event.target.getAttribute("data-theme");
    if (style) document.getElementById("mainstyle").setAttribute("href", style + ".css")
};

var listenSwap = () => {
    Array.prototype.forEach.call(document.getElementsByClassName("styleswap"), anchor => {
            anchor.addEventListener("click", swapStyle)
        }
    );
};


window.addEventListener("load", listenSwap);

// 2
var swapFont = (event) => {
    let action = event.target.getAttribute("data-action");
    Array.prototype.forEach.call(document.getElementsByTagName("*"), element => {
        let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        let fsize = parseInt(style);
        switch (action) {
            case 'increase':
                element.style.fontSize = (fsize + 1) + "px";
                break;
            case 'decrease':
                element.style.fontSize = (fsize - 1) + "px";
                break;
            case 'reset':
                element.style.fontSize = null;
                break;
        }
    });
};

var swapAlign = (event) => {
    let action = event.target.getAttribute("data-action");
    let body = document.getElementsByTagName("BODY")[0];
    if (body)
        body.style.textAlign = action;
};

var loadFontChanger = () => {
    Array.prototype.forEach.call(document.getElementsByClassName("fsize"), anchor => {
            anchor.addEventListener("click", swapFont)
        }
    );
};

var loadAlignChanger = () => {
    Array.prototype.forEach.call(document.getElementsByClassName("talign"), anchor => {
            anchor.addEventListener("click", swapAlign)
        }
    );
};

var loadListeners = () => {
    loadFontChanger();
    loadAlignChanger();
};

window.addEventListener("load", loadListeners);