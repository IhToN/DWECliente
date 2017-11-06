window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOMElement */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

let loop = () => {
    draw();
};

var bajando = true;
var derechando = true;
let draw = () => {
    let pelota = document.getElementById('pelota');
    let movx = 3, movy = 3;

    pelota.setAttribute('cx', (parseInt(pelota.getAttribute('cx')) + (derechando ? movx : -movx)).toString());
    pelota.setAttribute('cy', (parseInt(pelota.getAttribute('cy')) + (bajando ? movy : -movy)).toString());

    if(pelota.getAttribute('cx') >= 1050) derechando = false;
    else if (pelota.getAttribute('cx') <= 50) derechando = true;
    if(pelota.getAttribute('cy') >= 650) bajando = false;
    else if (pelota.getAttribute('cy') <= 50) bajando = true;
};

let anim = () => {
    loop();
    requestAnimFrame(anim);
};

anim();