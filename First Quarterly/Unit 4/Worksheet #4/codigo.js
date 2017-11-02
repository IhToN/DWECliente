// 1
var saludo = () => {
    if (!document.cookie) {
        document.getElementById('submit').addEventListener('click', () => {
            let name = document.getElementById('username');
            let expires = new Date(new Date().getTime() + 5 * 60000);
            console.log(name.value);
            console.log(expires.toDateString());
            document.cookie = 'username=' + name.value + '; path=/; ' + '; expires=' + expires.toDateString();
            console.log(document.cookie);
        });
    } else {
        console.log(document.cookie);
        let bloque = document.getElementById('hello');
        let firstCookie = document.cookie.split(';')[0];
        let name = firstCookie.split('=')[1];
        bloque.innerHTML = 'Hola <strong>' + name + '</strong>!<br/>' +
            '<button id="delete">Borrar Cookie</button>';

        document.getElementById('delete').addEventListener('click', () => {
            console.log('clikao 2');
            document.cookie = '';
            console.log(document.cookie);
        });
    }
};

window.addEventListener("load", saludo);

// 2


// 3