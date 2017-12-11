let initSelector = () => {
    let prov = document.getElementById('ps-prov');
    let mun = document.getElementById('ps-mun');
    // Create PS
    Pselect().create(prov, mun);

    prov.value = "-1";
    let evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    prov.dispatchEvent(evt);

    mun.addEventListener('change', () => {
        document.getElementById('code').innerHTML = 'Código: ' + mun.value;

        let getUrl = new Promise((resolve, reject) => {
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                } else if (this.readyState === 4 && this.status !== 200) {
                    reject('Ha habido un pete');
                }
            };

            xhttp.open("GET", `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/${mun.value}/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpaHRvbjkzQGdtYWlsLmNvbSIsImp0aSI6ImNiYzkyMWEzLWFiMmItNDkyOS05ZmNjLThmOWRmNmI5NTE4MCIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTEyMTIxMDM0LCJ1c2VySWQiOiJjYmM5MjFhMy1hYjJiLTQ5MjktOWZjYy04ZjlkZjZiOTUxODAiLCJyb2xlIjoiIn0.3ydBNg5lG9OKRep581H5Ekect9n_mZarf5Q7Shj2YWs`, true);
            xhttp.send();
        });

        let getData = (data) => {
            return new Promise((resolve, reject) => {
                let xhttp = new XMLHttpRequest();

                xhttp.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        resolve(this.responseText);
                    } else if (this.readyState === 4 && this.status !== 200) {
                        reject('Ha habido un pete');
                    }
                };

                xhttp.open("GET", JSON.parse(data)['datos'], true);
                xhttp.send();
            })
        };

        let getWeather = () => {
            getUrl.then(getData).then((text) => {
                document.getElementById('weather').innerHTML = text;
            }).catch((text) => {
                console.log(text);
            });
        };

        getWeather();
    });
};

window.addEventListener("load", () => {
    initSelector();
});