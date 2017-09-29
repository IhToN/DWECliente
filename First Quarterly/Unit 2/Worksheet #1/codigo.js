// 1
var currentTime = () => {
    let time = new Date();
    document.write("<h1>Fecha actual</h1>");
    document.write(time.getFullYear() + "<br />");
    document.write(time.getMonth() + "<br />");
    document.write(time.getDate() + "<br />");
    document.write(time.getHours() + "<br />");
    document.write(time.getMinutes() + "<br />");
    document.write(time.getSeconds() + "<br />");
};

currentTime();

// 2
var testSumaFecha = () => {
    let fechaHoy = new Date();
    let fecha85 = new Date();
    fecha85.setDate(fecha85.getDate() + 85);
    let fecha187 = new Date();
    fecha187.setDate(fecha187.getDate() - 187);

    fecha85.setYear(fecha85.getYear() + 2);
    fecha187.setHours(fecha187.getHours() - 24);

    let fechaResto = new Date(fecha85 - fecha187);


    document.write("<h1>Testeo de Suma y Resta</h1>");
    document.write("Hoy: " + fechaHoy + "<br />");
    document.write("85: " + fecha85 + "<br />");
    document.write("187: " + fecha187 + "<br />");
    document.write("Resto: " + fechaResto + "<br />");
};

testSumaFecha();

// 3
var counter = 60;
var downCount = () => {
    if (counter == 0) {
        document.write("VAGINA!!")
        window.clearTimeout();
    }
    else {
        setTimeout(downCount, 1000);
    }
    console.log(counter);
    counter--;
};
document.write("<h1>Testeo de Contador - Revisa la consola</h1>");
downCount();

// 5
var reloj = () => {
    let fechaHoy = new Date();
    console.log(fechaHoy.getHours() + ":" + fechaHoy.getMinutes() + ":" + fechaHoy.getSeconds());
    setTimeout(reloj, 1000);
};
document.write("<h1>Testeo de Reloj - Revisa la consola</h1>");
reloj();