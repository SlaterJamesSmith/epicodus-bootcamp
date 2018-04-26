import $ from 'jquery';
import { Api } from './api-class.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const mapsapi = require( 'google-maps-api' )( process.env.API_KEY );

let map;
let maps;
let markers = [];
function initMap() {
  mapsapi().then(function(mapsObj) {
    maps = mapsObj;
    map = new mapsObj.Map(document.getElementById('map'), {
      zoom: 2,
      center: {lat: 0, lng: 0}
    });
  });
}

function drawCircles(response){
  for (var i = 0; i < response.features.length; i++) {
    let magnitude = response.features[i].properties.mag;
    let coords = response.features[i].geometry.coordinates;
    let latLng = new maps.LatLng(coords[1],coords[0]);
    let marker = new maps.Marker({
      position: latLng,
      map: map,
      icon: getCircle(magnitude)
    });
    markers.push(marker);
  }
  function getCircle(magnitude) {
    return {
      path: maps.SymbolPath.CIRCLE,
      fillColor: 'red',
      fillOpacity: .2,
      scale: Math.pow(2, magnitude) / 2,
      strokeColor: 'white',
      strokeWeight: .5
    };
  }
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}

$(function() {
  let api = new Api();
  let quakePromise;
  let plotClock;

  initMap();

  $('form').submit(function(event) {
    event.preventDefault();
    let quakeDays = [];
    let startDate = new Date($('#start-day').val());
    let endDate = new Date($('#end-day').val());
    let dayCount = (endDate - startDate) / 1000 / 86400 + 1;

    for (let i = 0; i < dayCount; i++) {
      let addDay = startDate.getTime() + (86400000 * (i+1));
      let nextDay = new Date(addDay); quakeDays.push(`${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`);
    }

    plotClock = setInterval(function() {
      if (quakeDays.length === 2) {
        clearInterval(plotClock);
      }
      $('#date').text(quakeDays[0]);
      quakePromise = api.quakesCall(quakeDays[0],quakeDays[1]);
      quakeDays.shift();
      clearMarkers();
      quakePromise.then(function(response) {
        drawCircles(response);
      }, function(error) {
        console.log(`${error.message}`);
      });
    }, 1500);

  });
});
