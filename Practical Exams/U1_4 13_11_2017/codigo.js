// 2 ====================
let Ejercicio3 = (newTitle = undefined) => {
    // a
    if (newTitle) {
        document.title = newTitle;
    }

    // b
    let images = document.getElementsByTagName('img');
    if (images) {
        document.getElementById('contimg').innerHTML = 'Imágenes totales: ' + images.length;
        for (let i = 0; i < images.length; i++) document.getElementById('contimg').innerHTML += '<br/>' + images[i].src;
    }

    //c
    this.interval = setInterval(() => {
        let curtime = new Date();
        if (!curtime.getSeconds()) {
            clearInterval(this.interval);
            let link = window.prompt('A dónde quieres ir?', 'https://google.es');
            location.replace(link);
        } else {
            document.getElementById('curtime').innerHTML = 'Segundos actuales: ' + curtime.getSeconds();
        }
    }, 3 * 1000);
};


// 3 ====================

//a
class Gato {
    constructor(nombre, edad, tamanyo, raza) {
        this._nombre = nombre;
        this._edad = edad;
        this._tamanyo = tamanyo;
        this._raza = raza;
    }

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get tamanyo() {
        return this._tamanyo;
    }

    get raza() {
        return this._raza;
    }

    caracteristicas() {
        return `Me llamo ${this._nombre}, tengo ${this._edad} años, mido ${this._tamanyo}cm y soy un ${this._raza}.`;
    }
}

//b
class JaulaGatitos {
    constructor() {
        this._gatitos = [];
    }

    anyadirGato(gato = undefined) {
        if (gato && gato instanceof Gato) {
            this._gatitos.push(gato);
        }
    }

    buscarGato(nombre = undefined) {
        let ret;
        if (nombre) for (let gato of this._gatitos) if (gato.nombre === nombre) ret = gato;
        return ret ? ret.caracteristicas() : "No lo encuentro";
    }

    mostrarGatos() {
        let ret = `Hay ${this._gatitos.length} gatos en la jaula.\n`;
        for (let gato of this._gatitos) ret += `${gato.caracteristicas()}\n`;
        return ret;
    }
}

let testEj3 = () => {
    let jaula = new JaulaGatitos();

    let g = new Gato("misifu", 2, 24, "siamés");

    jaula.anyadirGato(g);
    console.log(jaula.mostrarGatos());
    console.log(jaula.buscarGato("misifu"));
    console.log(jaula.buscarGato("pepeluí"));
};

// 4 ====================
let aplicaEstilos = (idTabla = undefined) => {
    if (idTabla) {
        let ths = document.querySelectorAll(`#${idTabla} th`);
        let evenRow = document.querySelectorAll(`#${idTabla} tr:nth-child(even) td`);
        let oddRow = document.querySelectorAll(`#${idTabla} tr:nth-child(odd) td`);

        Array.prototype.forEach.call(ths, function (th) {
            th.style.color = 'red';
        });
        Array.prototype.forEach.call(evenRow, function (row) {
            row.style.backgroundColor = 'blue';
        });
        Array.prototype.forEach.call(oddRow, function (row) {
            row.style.backgroundColor = 'green';
        });

    }
};

// 5 ====================
let wtTO;
let clear = (evt) => {
    evt.preventDefault();
    evt.target.value = '';
    let warn = document.getElementById('aviso');
    if (warn) {
        warn.innerHTML = '';
        clearTimeout(wtTO);
    }
};

let warn = () => {
    let warnBox = document.getElementById('aviso');
    if (warnBox) {
        warnBox.innerHTML = 'está escribiendo...';
        clearTimeout(wtTO);
        wtTO = setTimeout(() => {
            warnBox.innerHTML = '';
        }, 3 * 1000);
    }
};

let writing = (evt) => {
    if (evt.keyCode === 13) {
        clear(evt);
    } else {
        warn();
    }
};

let initWhatsapp = () => {
    let box = document.getElementById('mensaje');
    if (box) {
        box.addEventListener('keypress', writing);
    }
};

window.addEventListener('load', initWhatsapp);
