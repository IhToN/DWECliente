// 2
document.addEventListener("click", function (event) {
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
        td.addEventListener("mousemove", function (event) {
            if (event.ctrlKey) event.target.className = '';
            else event.target.className = 'pintado';
        }, false);
    });

    console.log(document.querySelectorAll('#pinturillo td'));
};

window.addEventListener("load", generateCanvas);

// 6
document.getElementById('cleanptr').addEventListener("click", generateCanvas);

// 9 y 10
var startListeningDnD = () => {
    document.querySelectorAll('img.dragable').forEach(image => {
        image.addEventListener("dragstart", function (event) {
            event.target.style.opacity = '0.4';
        }, false);
        image.addEventListener("dragend", function (event) {
            event.target.style.opacity = '1';
            event.target.style.top = event.screenY + "px";
            event.target.style.left = event.screenX + "px";
        }, false);
    });
};
window.addEventListener("load", startListeningDnD);