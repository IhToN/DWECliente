const svgNS = "http://www.w3.org/2000/svg";

let creaCuadrado = (svgID, width) => {
    let CANVAS = document.getElementById('ej3');

    let element = document.createElementNS(svgNS, 'rect');
    element.setAttributeNS(null, 'id', svgID);
    element.setAttributeNS(null, 'stroke', 'black');
    element.setAttributeNS(null, 'fill', 'red');
    element.setAttributeNS(null, 'stroke-width', 2);
    element.setAttributeNS(null, 'x', 0);
    element.setAttributeNS(null, 'y', 0);
    element.setAttributeNS(null, 'width', width);
    element.setAttributeNS(null, 'height', width);

    CANVAS.appendChild(element);
};

let animaRectangulo = (svgID) => {
    let rect = document.getElementById(svgID);
    let rectwidth = rect.getAttributeNS(null, 'width');
    let posneg = rectwidth < 350 ? 1 : -1;
    let move = 5000 / Math.abs(rectwidth - 350);

    let animacion = setInterval(() => {
        let length = parseInt(rect.getAttributeNS(null, 'width'));
        rect.setAttributeNS(null, 'width', length + posneg);
        rect.setAttributeNS(null, 'height', length + posneg);
        if (posneg > 0) {
            if (length + posneg >= 350) clearInterval(animacion);
        }
        else {
            if (length + posneg <= 350) clearInterval(animacion);
        }
    }, move);
};

window.addEventListener('load', () => {
    creaCuadrado('c1', 25);
});