let canvas = document.getElementById('canvas');
let ancho = parseInt(canvas.getAttribute('width'));
let alto = parseInt(canvas.getAttribute('height'));

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

let draw = () => {
    let pelotas = document.getElementsByClassName('pelota');
    Array.prototype.forEach.call(pelotas, (pelota) => {
        pelota.setAttribute('cx', (parseInt(pelota.getAttribute('cx')) + (pelota.derechando ? pelota.movx : -pelota.movx)).toString());
        pelota.setAttribute('cy', (parseInt(pelota.getAttribute('cy')) + (pelota.bajando ? pelota.movy : -pelota.movy)).toString());

        checkBorderCollision(pelota);
        checkBallsCollision(pelotas, pelota);
    });
};

let checkBorderCollision = (pelota) => {
    if (pelota.getAttribute('cx') >= ancho - pelota.radio) pelota.derechando = false;
    else if (pelota.getAttribute('cx') <= pelota.radio) pelota.derechando = true;
    if (pelota.getAttribute('cy') >= alto - pelota.radio) pelota.bajando = false;
    else if (pelota.getAttribute('cy') <= pelota.radio) pelota.bajando = true;
};

let checkBallsCollision = (pelotas, pelota) => {
    Array.prototype.forEach.call(pelotas, (plcheck) => {
        if (plcheck !== pelota) {
            let bndPlt = pelota.getBoundingClientRect();
            let bndChk = plcheck.getBoundingClientRect();

            if (bndChk.left <= bndPlt.right &&
                bndChk.right >= bndPlt.left &&
                bndChk.top <= bndPlt.bottom &&
                bndChk.bottom >= bndPlt.top) console.log('Choque entre ' + pelota.getAttribute('fill') + ' y ' + plcheck.getAttribute('fill'));
        }
    });
};

let anim = () => {
    loop();
    requestAnimFrame(anim);
};

let init = () => {
    let pelotas = document.getElementsByClassName('pelota');
    Array.prototype.forEach.call(pelotas, (pelota) => {
        pelota.bajando = true;
        pelota.derechando = true;
        pelota.radio = pelota.hasAttribute('r') ? parseInt(pelota.getAttribute('r')) : 40;
        pelota.movx = pelota.hasAttribute('movx') ? parseInt(pelota.getAttribute('movx')) : 3;
        pelota.movy = pelota.hasAttribute('movy') ? parseInt(pelota.getAttribute('movy')) : 3;
    });
    anim();
};

init();