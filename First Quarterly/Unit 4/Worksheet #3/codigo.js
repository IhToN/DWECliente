var comprobarNombr = () => {
    var nombre = document.getElementById('Nombre').value;
    var req = new RegExp("^[a-zA-Z ]+$");
    document.getElementById('Nombre').style.backgroundColor = req.test(nombre) ? 'lightgreen' : 'pink';
}

var comprobarApellido = () => {
    var apellidos = document.getElementById('Apellidos').value;
    var req = new RegExp("^[a-zA-Z ]+$");
    document.getElementById('Apellidos').style.backgroundColor = req.test(apellidos) ? 'lightgreen' : 'pink';
}

var validateDN = (value) => {

    var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var str = value.toString().toUpperCase();

    if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

    var nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');

    var letter = str.substr(-1);
    var charIndex = parseInt(nie.substr(0, 8)) % 23;

    if (validChars.charAt(charIndex) === letter) return true;

    return false;
}

var comprobarDn = () => {
    document.getElementById('DNI').style.backgroundColor = validateDNI(document.getElementById('DNI').value) ? 'lightgreen' : 'pink';
}

var comprobarTelefon = () => {
    var telefono = document.getElementById('Telefono').value;
    var req = /^\d{9}$/;
    document.getElementById('Telefono').style.backgroundColor = req.test(telefono) ? 'lightgreen' : 'pink';
}

var comprobarEmai = () => {
    var email = document.getElementById('Email').value;
    var req = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    document.getElementById('Email').style.backgroundColor = req.test(email) ? 'lightgreen' : 'pink';
}