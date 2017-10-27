// 2
document.addEventListener("click", function (event) {
    if (event.ctrlKey)
        alert('clickaso');
}, false);

// 3
document.addEventListener("mousemove", function (event) {
    document.getElementById('coords').innerHTML = 'X: ' + event.clientX + ' || Y: ' + event.clientY;
}, false);

// 5
var generateCanvas = () => {
    let canvas = document.getElementById('pinturillo');
    let html_str = '';
    for (let i = 1; i <= 100; i++) {
        html_str += '<tr>';
        for (let j = 1; j <= 300; j++) {
            html_str += '<td></td>';
        }
        html_str += '</tr>';
    }
    canvas.innerHTML = html_str;

    startListeningCanvas();
};

var startListeningCanvas = () => {
    document.querySelectorAll('#pinturillo td').forEach(td => {
        td.addEventListener("mouseover", function (event) {
            if(event.ctrlKey && event.shiftKey)  event.target.style.backgroundColor = 'transparent';
            else if (event.ctrlKey) event.target.style.backgroundColor = 'red';
            else if (event.shiftKey) event.target.style.backgroundColor = 'blue';
            else  event.target.style.backgroundColor = 'purple';
        }, false);
    });
};

window.addEventListener("load", generateCanvas);

// 6
document.getElementById('cleanptr').addEventListener("click", generateCanvas);

// 9 y 10
var startListeningDnD = () => {
    document.querySelectorAll('img.dragable').forEach(image => {
        image.clicked = false;
        image.addEventListener("click", function (event) {
            event.target.clicked = event.target.clicked ? false : true;
            event.target.style.opacity = event.target.clicked ? '0.4' : '1';
        }, false);
        image.addEventListener("mousemove", function (event) {
            if (event.target.clicked) {
                event.target.style.top = (event.y - (event.target.height / 2)) + "px";
                event.target.style.left = (event.x - (event.target.width / 2)) + "px";
            }
        }, false);
    });
};
window.addEventListener("load", startListeningDnD);