// 1 y 2
let saludo = () => {
    if (!document.cookie)
        guardarCookies();
    else
        cargarCookies();
};

let guardarCookies = () => {
    document.getElementById('submit').addEventListener('click', () => {
        let name = document.getElementById('username');
        let fondo = document.getElementById('colorfondo');
        let border = document.getElementById('colorborder');
        let text = document.getElementById('colortext');
        let expires = new Date(new Date().getTime() + 5 * 60000);
        document.cookie = 'username=' + name.value + '; path=/; ' + '; expires=' + expires.toUTCString();
        document.cookie = 'colorfondo=' + fondo.value + '; path=/; ' + '; expires=' + expires.toUTCString();
        document.cookie = 'colorborder=' + border.value + '; path=/; ' + '; expires=' + expires.toUTCString();
        document.cookie = 'colortext=' + text.value + '; path=/; ' + '; expires=' + expires.toUTCString();
        location.reload();
    });
};

let cargarCookies = () => {
    let bloque = document.getElementById('hello');
    let cookie = document.cookie.split(';');
    let nameck = cookie[0].split('=')[1];
    let bgck = cookie[1].split('=')[1];
    let bdck = cookie[2].split('=')[1];
    let txtck = cookie[3].split('=')[1];

    bloque.innerHTML = 'Hola <strong>' + nameck + '</strong>!<br/>' +
        '<button id="delete">Borrar Cookie</button>';
    bloque.style.backgroundColor = bgck;
    bloque.style.border = "2px solid " + bdck;
    bloque.style.color = txtck;

    document.getElementById('delete').addEventListener('click', () => {
        document.cookie = 'username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        document.cookie = 'colorfondo=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        document.cookie = 'colorborder=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        document.cookie = 'colortext=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        location.reload();
    });
};

window.addEventListener("load", saludo);

// 3
// expires vacío, se crea como cookie de sesión y se borra solita.