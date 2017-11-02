let comprobarNombr = () => {
    let nombre = document.getElementById('Nombre').value;
    let req = new RegExp("^[a-zA-Z ]+$");
    document.getElementById('Nombre').style.backgroundColor = req.test(nombre) ? 'lightgreen' : 'pink';
};

let comprobarApellido = () => {
    let apellidos = document.getElementById('Apellidos').value;
    let req = new RegExp("^[a-zA-Z ]+$");
    document.getElementById('Apellidos').style.backgroundColor = req.test(apellidos) ? 'lightgreen' : 'pink';
};

let validateDN = (value) => {

    let validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    let nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    let str = value.toString().toUpperCase();

    if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

    let nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');

    let letter = str.substr(-1);
    let charIndex = parseInt(nie.substr(0, 8)) % 23;

    if (validChars.charAt(charIndex) === letter) return true;

    return false;
};

let comprobarDn = () => {
    document.getElementById('DNI').style.backgroundColor = validateDNI(document.getElementById('DNI').value) ? 'lightgreen' : 'pink';
};

let comprobarTelefon = () => {
    let telefono = document.getElementById('Telefono').value;
    let req = /^\d{9}$/;
    document.getElementById('Telefono').style.backgroundColor = req.test(telefono) ? 'lightgreen' : 'pink';
};

let comprobarEmai = () => {
    let email = document.getElementById('Email').value;
    let req = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    document.getElementById('Email').style.backgroundColor = req.test(email) ? 'lightgreen' : 'pink';
};