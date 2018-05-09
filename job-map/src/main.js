import $ from 'jquery';
import { DataAccess } from './data-access.js';
import { Job } from './job.js';
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
      zoom: 4,
      center: {lat: 37.85, lng: -97.65}
    });
  });
}

function placeMarkers(coord, jobCount, index, markers, jobs) {
  let marker = new mapControl.Marker({
    position: coord,
    label: jobCount.toString(),
    map: userInterfaceMap,
    icon: circle(jobCount)
  });
  markers.push(marker);
  marker.addListener('click', function() {
    $("#job-results").empty();
    jobs[index].forEach(function(job) {
      $("#job-results").append(`<div class="card card-body"><div class="row"><div class="col-md-2"><img src="${job.logo}"></div><div class="col-md-10"><h4>${job.title}</h4><p>${job.company}</p><p>${job.location}</p><p><a href="${job.url}">${job.url}</a></p></div></div></div>`);
    });
  });
}

function circle(jobCount) {
  let color;
  if (jobCount >= 10) {
    color = 'red';
  } else if (jobCount > 4 && jobCount < 10) {
    color = 'orange';
  } else {
    color = 'blue';
  }
  return {
    path: mapControl.SymbolPath.CIRCLE,
    fillColor: color,
    fillOpacity: .5,
    scale: (jobCount + 5) * 2,
    strokeColor: 'white',
    strokeWeight: .5
  };
}

function clearMarkers(markers) {
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
}

let cityCoords = [
  {lat: 45.5230622, lng: -122.6764815}, // coordinates for Portland
  {lat: 47.6062095, lng: -122.3320708}, // coordinates for Seattle
  {lat: 37.7749295, lng: -122.4194155}, // coordinates for San Francisco
  {lat: 40.7127753, lng: -74.0059728}]; // coordinates for New York

$(document).ready(function() {
  let dataAccess = new DataAccess();
  let pdx;
  let sea;
  let sf;
  let ny;
  let markers = [];
  let jobs = [ [],[],[],[] ];

  initMap();

  $('form').submit(function(event) {
    event.preventDefault();
    $("#job-results").empty();
    clearMarkers(markers);
    jobs = [ [],[],[],[] ];
    let keyword = $('#description').val();

    pdx = dataAccess.apiCallGithub(keyword, 'Portland');
    sea = dataAccess.apiCallGithub(keyword, 'Seattle');
    sf = dataAccess.apiCallGithub(keyword, 'San Francisco');
    ny = dataAccess.apiCallGithub(keyword, 'New York');

    Promise.all([pdx, sea, sf, ny]).then(function(responses) {
      for (let i = 0; i < responses.length; i++) {
        responses[i].forEach(function(jobObj){
          let job = new Job(jobObj.title, jobObj.company, jobObj.url, jobObj.location, jobObj.company_logo);
          jobs[i].push(job);
        });
      }
      for (let j = 0; j < jobs.length; j ++) {
        if (jobs[j].length > 0) {
          placeMarkers(cityCoords[j], jobs[j].length, j, markers, jobs);
        }
      }
    }, function(error) {
      $('#job-results').html(`<h3 class="text-center text-danger">${error.message}</h3>`);
    });
  });
});
