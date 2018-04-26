import $ from 'jquery';
import { Api } from './api-class.js';
import { Job } from './job.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const mapsapi = require( 'google-maps-api' )( process.env.API_KEY );

let map;
let maps;
let markers = [];
let jobsArray = [ [],[],[],[] ];

function initMap() {
  mapsapi().then(function(mapsObj) {
    maps = mapsObj;
    map = new mapsObj.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 37.85, lng: -97.65}
    });
  });
}

function drawCircle(coord, jobCount, index){
  let marker = new maps.Marker({
    position: coord,
    label: jobCount.toString(),
    map: map,
    icon: styleCircle(jobCount)
  });
  markers.push(marker);
  marker.addListener('click', function(){
    $("#job-results").empty();
    jobsArray[index].forEach(function(job){
      $("#job-results").append(`<div class="card card-body"><div class="row"><div class="col-md-2"><img src="${job.logo}"></div><div class="col-md-10"><h4>${job.title}</h4><p>${job.company}</p><p>${job.location}</p><p><a href="${job.url}">${job.url}</a></p></div></div></div>`);
    });
  });

  function styleCircle(jobCount) {
    let color;
    if (jobCount >= 10) {
      color = 'red';
    } else if (jobCount > 4 && jobCount < 10) {
      color = 'orange';
    } else {
      color = 'blue';
    }
    return {
      path: maps.SymbolPath.CIRCLE,
      fillColor: color,
      fillOpacity: .5,
      scale: (jobCount + 5) * 2,
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

let cityCoords = [
  {lat: 45.5230622,lng: -122.6764815}, // coordinates for Portland
  {lat: 47.6062095,lng: -122.3320708}, // coordinates for Seattle
  {lat: 37.7749295,lng: -122.4194155}, // coordinates for San Francisco
  {lat: 40.7127753,lng: -74.0059728}]; // coordinates for New York

function resetPage(){
  $("#job-results").empty();
  clearMarkers();
  jobsArray = [ [],[],[],[] ];
}

$(function() {
  let api = new Api();
  let promisePdx;
  let promiseSea;
  let promiseSf;
  let promiseNy;

  initMap();

  $('form').submit(function(event) {
    event.preventDefault();
    resetPage();
    let keyword = $('#description').val();

    promisePdx = api.githubCall(keyword,"Portland");
    promiseSea = api.githubCall(keyword,"Seattle");
    promiseSf = api.githubCall(keyword,"San_Francisco");
    promiseNy = api.githubCall(keyword,"New_York");

    Promise.all([promisePdx, promiseSea, promiseSf, promiseNy]).then(function(responses) {
      for (let i = 0; i < responses.length; i++) {
        responses[i].forEach(function(jobObj){
          let job = new Job(jobObj.title, jobObj.company, jobObj.url, jobObj.location, jobObj.company_logo);
          jobsArray[i].push(job);
        });
      }
      console.log(jobsArray);
      for (let j = 0; j < jobsArray.length; j ++) {
        if (jobsArray[j].length > 0) {
          drawCircle(cityCoords[j], jobsArray[j].length, j);
        }
      }
    }, function(error) {
      console.log(`${error.message}`);
    });

  });
});
