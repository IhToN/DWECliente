class New {
    constructor(title = '', date = '', text = '', image = '') {
        this.title = title;
        this.date = date;
        this.text = text;
        this.image = image;
    }
}

class NewView {
    constructor(currentNew) {
        this.new = currentNew;
    }

    setView() {
        let newBox = document.getElementById('currentNew');
        let htmlString = '<p>' + this.new.text + '</p>';
        htmlString += `<img src="${this.new.image}" alt="${this.new.image}" />`;
        newBox.innerHTML = htmlString;
    }
}

class News {
    constructor() {
        this.xhttp = new XMLHttpRequest();

        let classThis = this;
        this.xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                classThis.loadNews(this.responseText);
            }
        };

        this.initTable();
        this.updateNews = setTimeout(() => {
            this.getNews();
        }, 3 * 1000);
    }

    initTable() {
        this.newsBox = document.getElementById('news');
        this.table = document.createElement('table');
        this.table.setAttribute('class', 'responstable');
        if (this.newsBox) {
            let trHead = document.createElement('tr');

            let thTitle = document.createElement('th');
            thTitle.innerHTML = 'Title';

            let thDate = document.createElement('th');
            thDate.innerHTML = 'Date';

            trHead.appendChild(thTitle);
            trHead.appendChild(thDate);

            this.table.appendChild(trHead);
            this.newsBox.appendChild(this.table);
        }
    }

    getNews() {
        this.xhttp.open("GET", "datos.xml", true);
        this.xhttp.send();
    };

    createNews(newsParam) {
        var num_campos = 4; //Salto del numero de campos de los correos, recorriendo el array
        for (let i = 1; i < newsParam.length; i += num_campos + 2) {
            let currentNew = new New(newsParam[i], newsParam[i + 1], newsParam[i + 2], newsParam[i + 3]);
            console.log('Titulo: ' + newsParam[i] + '; Fecha: ' + newsParam[i + 1] + '; Texto: ' + newsParam[i + 2] + '; Imagen: ' + newsParam[i + 3]);
            this.newsView.push(new NewView(currentNew));
        }
    }

    loadNews(xmlString) {
        this.newsView = [];

        /* Copia y modificación del parser de Antonio Álvarez */
        let sin_saltos_linea = xmlString.replace(/(\r\n|\n|\r)/gm, ""); //Elimina todos los saltos de linea de la cadena
        let sin_espacios = sin_saltos_linea.replace(/\s{2,}/g, ",").substring(0); //Reemplaza secuencia de blancos y separa por comas. Quita la primera coma del string.
        let sin_tags = sin_espacios.replace(/<[^>]*>/g, ""); //Elimina todos los tags
        let parametros = (sin_tags.split(",")); //Obtengo lista con cada parametro
        parametros.shift(); //Eliminamos el primer elemento del array
        parametros.pop(); //Saco ultimo espacio generado de la lista

        this.createNews(parametros);

        this.printNews();
    };

    printNews() {
        if (this.newsBox) {
            this.newsView.forEach((elem) => {
                let trElem = document.createElement('tr');

                let thTitle = document.createElement('td');
                thTitle.innerHTML = elem.new.title;

                let thDate = document.createElement('td');
                thDate.innerHTML = elem.new.date;


                trElem.appendChild(thTitle);
                trElem.appendChild(thDate);

                trElem.addEventListener('click', () => {
                   elem.setView();
                });

                this.table.appendChild(trElem);
            });
        }
    }
}

window.addEventListener("load", () => {
    let news = new News();
});