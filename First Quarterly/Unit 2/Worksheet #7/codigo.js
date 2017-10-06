// 1
var toRad = (x) => x * Math.PI / 180;

var calcDistance = (p1, p2) => { // Points are Geolocation.coords objects
    var R = 6371; // earth's mean radius in km
    var dLat = toRad(p2.latitude - p1.latitude);
    var dLong = toRad(p2.longitude - p1.longitude);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(p1.latitude)) * Math.cos(toRad(p2.latitude)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return d.toFixed(3);
};

var exerOne = () => {
    if ("geolocation" in navigator) {
        var lastPosition;
        var distance = 0;
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log('Lat: ' + position.coords.latitude + '|| Lon: ' + position.coords.longitude);
            lastPosition = position;
        });

        var watchID = navigator.geolocation.watchPosition(function (position) {
            console.log('New!!  Lat: ' + position.coords.latitude + '|| Lon: ' + position.coords.longitude);
            distance += calcDistance(lastPosition.coords, position.coords);
            lastPosition = position;
        });

    } else console.log('Sorry, we couldn\'t get your position.');
};
exerOne();

// 2
var map;
var marker;
var routePath;
var routeCoords = [];

var geocodeLatLng = (geocoder, map, infowindow, coords) => {
    var latlng = {lat: coords.latitude, lng: coords.longitude};
    geocoder.geocode({'location': latlng}, function (results, status) {
        if (status === 'OK') {
            if (results[1]) {
                infowindow.setContent(results[1].formatted_address);
                infowindow.open(map, marker);
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
};

var drawMap = (position) => {
    var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });

    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;

    geocodeLatLng(geocoder, map, infowindow, position.coords);
    updateMarker(uluru);
};

var updateMarker = (uluru) => {
    marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
        draggable: true,
    });

    marker.addListener('click', toggleBounce);
};

var updateRoute = () => {
    routePath = new google.maps.Polyline({
        path: routeCoords,
        strokeColor: '#0000ff',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    routePath.setMap(map);
    marker.position = {lat: position.coords.latitude, lng: position.coords.longitude};
};

var toggleBounce = () => {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
};

var gmapApi = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            drawMap(position);
            routeCoords.push({lat: position.coords.latitude, lng: position.coords.longitude});
            updateRoute();
        });

        var watchID = navigator.geolocation.watchPosition(function (position) {

            routeCoords.push({lat: position.coords.latitude, lng: position.coords.longitude});
            updateRoute();
        });
    } else console.log('Sorry, we couldn\'t get your position.');
};