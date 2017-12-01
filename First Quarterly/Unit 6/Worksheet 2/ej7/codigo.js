let xhttp = new XMLHttpRequest();
let xhttp2 = new XMLHttpRequest();
let xhttp3 = new XMLHttpRequest();
let webox;
let position;
let interval;

let loadPosition = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            position = pos;
            xhttp.open("GET", `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}&sensor=true`, false);
            xhttp.send();
        });
    }
};

let proccess = () => {
    loadPosition();
};

let update = (json) => {
    let cp = json.results[0].address_components[json.results[0].address_components.length - 1].long_name;
    let citycode = cp.slice(0, 2);
    xhttp2.open("GET", `https://opendata.aemet.es/opendata/api/prediccion/provincia/hoy/${citycode}/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpaHRvbjkzQGdtYWlsLmNvbSIsImp0aSI6ImNiYzkyMWEzLWFiMmItNDkyOS05ZmNjLThmOWRmNmI5NTE4MCIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTEyMTIxMDM0LCJ1c2VySWQiOiJjYmM5MjFhMy1hYjJiLTQ5MjktOWZjYy04ZjlkZjZiOTUxODAiLCJyb2xlIjoiIn0.3ydBNg5lG9OKRep581H5Ekect9n_mZarf5Q7Shj2YWs`, false);
    xhttp2.send();
};

let getPrdUrl = (json) => {
    console.log(json);
    xhttp3.open("GET", json.datos, false);
    xhttp3.send();
};

let showWeather = (text) => {
    webox.innerHTML = text;
};

window.addEventListener("load", () => {
    webox = document.getElementById('weather');

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            update(JSON.parse(this.responseText));
        }
    };

    xhttp2.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            getPrdUrl(JSON.parse(this.responseText));
        }
    };

    xhttp3.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            showWeather(this.responseText);
        }
    };

    proccess();

    interval = setInterval(proccess, 30 * 1000);
});