// 1 y 2
document.getElementById("pinturillo").addEventListener("touchstart", function (event) {
    let html_str = '<ul>';
    event.touches.forEach((touch, idx) => {
        str += "<li>" + idx + ". (" + touch.x + ", " + touch.y + ")</li>";
    });
    html_str += '</ul>';
    document.getElementById("coords").innerHTML = str
}, false);

// 3 - can't touch this
