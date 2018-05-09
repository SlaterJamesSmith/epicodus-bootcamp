import $ from 'jquery';
import { DataAccess } from './data-access.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const mapsapi = require( 'google-maps-api' )( process.env.API_KEY );

let userInterfaceMap;
let mapControl;

function initMap() {
  mapsapi().then(function(googleMaps) {
    mapControl = googleMaps;
    userInterfaceMap = new googleMaps.Map(document.getElementById('map'), {
      zoom: 2,
      center: {lat: 0, lng: 0}
    });
  });
}

function placeMarkers(mapData, markers) {
  mapData.features.forEach(function(feature) {
    let magnitude = feature.properties.mag;
    let coords = feature.geometry.coordinates;
    let latLng = new mapControl.LatLng(coords[1],coords[0]);
    let marker = new mapControl.Marker({
      position: latLng,
      map: userInterfaceMap,
      icon: {
        path: mapControl.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .2,
        scale: Math.pow(2, magnitude) / 2,
        strokeColor: 'white',
        strokeWeight: .1
      }
    });
    markers.push(marker);
  });
}

function clearMarkers(markers) {
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
}

$(document).ready(function() {
  let dataAccess = new DataAccess();
  let plotter;
  let markers = [];

  initMap();

  $('form').submit(function(event) {
    event.preventDefault();
    let quakeDays = [];
    let startDate = new Date($('#start-day').val());
    let endDate = new Date($('#end-day').val());
    let dayCount = (endDate - startDate) / 1000 / 86400 + 1;

    for (let i = 0; i < dayCount; i++) {
      let refDay = startDate.getTime() + (86400000 * (i + 1));
      let day = new Date(refDay);
      quakeDays.push(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`);
    }

    plotter = setInterval(function() {
      if (quakeDays.length === 2) {
        clearInterval(plotter);
      }
      clearMarkers(markers);
      markers = [];
      $('#date h2').text(quakeDays[0]).slideDown();
      dataAccess.apiCallUSGS(quakeDays[0],quakeDays[1]);
      quakeDays.shift();
      dataAccess.apiCall.then(function(response) {
        placeMarkers(response, markers);
      });
    }, 2000);
  });
});
