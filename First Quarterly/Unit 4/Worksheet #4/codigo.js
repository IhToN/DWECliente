// 1 y 2
var saludo = () => {
    let nameck = '';
    let bgck = '';
    let bdck = '';
    let txtck = '';
    if(document.cookie) {
        let cookie = document.cookie.split(';');
        nameck = cookie[0].split('=')[1];
        bgck = cookie[1].split('=')[1];
        bdck = cookie[2].split('=')[1];
        txtck = cookie[3].split('=')[1];
    }
    if (!document.cookie || nameck === '') {
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
    } else {
        let bloque = document.getElementById('hello');

        bloque.innerHTML = 'Hola <strong>' + nameck + '</strong>!<br/>' +
            '<button id="delete">Borrar Cookie</button>';
        bloque.style.backgroundColor = bgck;
        bloque.style.border = "2px solid " + bdck;
        bloque.style.color = txtck;

        document.getElementById('delete').addEventListener('click', () => {
            document.cookie = 'username=; path=/; expires=Wed; 01 Jan 1970';
            document.cookie = 'colorfondo=; path=/; expires=Wed; 01 Jan 1970';
            document.cookie = 'colorborder=; path=/; expires=Wed; 01 Jan 1970';
            document.cookie = 'colortext=; path=/; expires=Wed; 01 Jan 1970';
            location.reload();
        });
    }
};

window.addEventListener("load", saludo);

// 3
// expires vacío, se crea como cookie de sesión y se borra solita.