let poblacionZurda = () => {
    google.charts.load("current", {packages: ["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = google.visualization.arrayToDataTable([
            ['Año', 'Población', {role: 'style'}],
            ['2011', 1452, 'fill-color: #000000; fill-opacity: 0.25'],
            ['2012', 2360, 'fill-color: #AA6666; fill-opacity: 0.5'],
            ['2013', 4021, 'fill-color: #66AA66; fill-opacity: 0.75'],
            ['2014', 1300, 'fill-color: #6666AA; fill-opacity: 1']
        ]);

        let optionsbar = {
            title: "Evolución de la población zurda en Badajoz",
            width: 600,
            height: 400,
            backgroundColor: 'lightgray',
            bar: {groupWidth: "95%"},
            legend: {position: "none"},
            animation: {
                duration: 6000,
                easing: 'out',
                startup: true
            },
        };

        let chartbar = new google.visualization.ColumnChart(document.getElementById('pobzur-bar'));
        chartbar.draw(data, optionsbar);
    }
};

window.addEventListener('load', poblacionZurda);