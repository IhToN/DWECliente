// 5
var paresImpares = () => {
    let ret = [];
    for (let i = 0; i < 100; i++) ret.push(Math.floor(Math.random() * 1000) + 1)
    return ret;
};
var sortParesImpares = (lista_numeros) => {
    return lista_numeros.sort((a, b) => a % 2 - b % 2 || a - b);
};

let test = paresImpares();
console.log(test);
console.log(sortParesImpares(test));

// 7
var setACero = (arr) => {
    arr.forEach(function (part, index) {
        arr[index] = 0;
    });
};
var sumaUno = (arr) => {
    arr.forEach(function (part, index) {
        arr[index]++;
    });
};
var unirEspacios = (arr) => {
    return arr.join(' ');
};

// 8
var lanzamiento = () => Math.floor(Math.random() * 6) + 1;
var stats = (nLanzamientos) => {
    let ret = new Array(14).fill(0);
    for (let i = 0; i < nLanzamientos; i++) ret[(lanzamiento() + lanzamiento())]++;
    return ret;
};

// 9
var statsBidim = (nLanzamientos) => {
    let ret = new Array(6).fill(new Array(6).fill(0));
    for (let i = 0; i < nLanzamientos; i++) ret[lanzamiento() - 1][lanzamiento() - 1]++;
    return ret;
};