// 2
var lanzamiento = () => Math.floor(Math.random() * 6) + 1;

// 3
var stats = (nLanzamientos) => {
    let ret = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < nLanzamientos; i++) ret[lanzamiento() - 1]++;
    return ret;
};

// 6
var potencia = (numero, exponente) => exponente == 0 ? 1 : numero * potencia(numero, --exponente);

// 7
var factorial = (numero) => (numero <= 1) ? 1 : numero * factorial(numero - 1);