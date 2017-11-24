/*
    Diputados
 */

let diputados = () => {
    google.charts.load("current", {packages: ["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = google.visualization.arrayToDataTable([
            ['Partido', 'Votos'],
            ['PP', 7941236],
            ['PSOE', 5443846],
            ['Unidos Podemos', 3227123],
            ['Cs', 3141570],
            ['Otros', 3779358]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
            {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            }]);

        let optionsbar = {
            title: "Congreso de los Diputados - Barra",
            width: 600,
            height: 400,
            bar: {groupWidth: "95%"},
            legend: {position: "none"},
        };

        let pieHole = 0;
        let options = {
            title: 'Congreso de los Diputados - Donut',
            pieHole: pieHole,
            slices: {
                0: {color: 'blue'},
                1: {color: 'red'},
                2: {color: 'purple'},
                3: {color: 'orange'},
                4: {color: 'green'}
            },
        };

        let chartbar = new google.visualization.BarChart(document.getElementById('diputados-bar'));
        chartbar.draw(view, optionsbar);
        let chart = new google.visualization.PieChart(document.getElementById('diputados-pie'));
        chart.draw(data, options);

        let handler = setInterval(function () {
            pieHole += 0.01;

            options = {
                title: 'Congreso de los Diputados - Donut',
                pieHole: pieHole,
                slices: {
                    0: {color: 'blue'},
                    1: {color: 'red'},
                    2: {color: 'purple'},
                    3: {color: 'orange'},
                    4: {color: 'green'}
                },
            };
            chart.draw(data, options);

            if (pieHole > 0.7) clearInterval(handler);
        }, 1000 / 60);
    }
};

window.addEventListener('load', diputados);

/*
    Turistas
 */

let turistas = () => {
    google.charts.load('current', {
        'packages': ['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = google.visualization.arrayToDataTable([
            ['Country', 'Popularidad'],
            ['Germany', 100],
            ['United States', 200],
            ['Brazil', -100],
            ['Canada', 1000],
            ['France', 450],
            ['RU', -1000],
            ['ES', 5]
        ]);

        let options = {
            title: 'Popularidad de Países'
        };

        let chart = new google.visualization.GeoChart(document.getElementById('turistas'));
        chart.draw(data, options);
    }
};

window.addEventListener('load', turistas);