import $ from 'jquery';
import { DataAccess } from './data-access.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function displayProviders(result) {
  $('#providers').empty();
  result.forEach(function(provider) {
    $('#providers').append(`
      <div id="${provider.uid}" class="provider">
        <div class="main">
        <p class="new-patients"></p>
        <h3>${provider.firstName} ${provider.lastName}</h3>
        </div>
        <div class="row">
          <div class="col-sm-3">
          <img src="${provider.imageUrl}" alt="profile pic">
          </div>
          <div class="col-sm-5 location">
          <h4>Office Location</h4>
          </div>
          <div class="col-sm-4">
            <h4>Specialty</h4>
            <ul class="specialty"></ul>
          </div>
        </div>
      </div>`);
    provider.specialties.forEach(function(specialty) {
      $(`#${provider.uid} .specialty`).append(`<li>${specialty.name}</li>`);
    });
    for (let i = 0; i < provider.practices.length; i ++) {
      if (provider.practices[i].acceptsNewPatients) {
        $(`#${provider.uid} .new-patients`).html('<span class="yes">Accepting New Patients</span>');
      } else {
        $(`#${provider.uid} .new-patients`).html('<span class="no">No New Patients</span>');
      }
      $(`#${provider.uid} .location`).append(`
        <p class="address">${provider.practices[i].address.street}<br>
        ${provider.practices[i].address.city}, ${provider.practices[i].address.state} ${provider.practices[i].address.zip}</p>`);
      $(`#${provider.uid} .location`).append(`<p><span class="subtitle">Phone:</span> ${provider.practices[i].phones[0].number.slice(0,3)}.${provider.practices[i].phones[0].number.slice(3,6)}.${provider.practices[i].phones[0].number.slice(6)} <em>(${provider.practices[i].phones[0].type})</em></p>`);
      if (provider.practices[i].website !== undefined) {
        $(`#${provider.uid} .location`).append(`<p><a href="${provider.practices[i].website}" target="_blank">Website</a></p>`);
      }
    }
  });
}

function resetDisplay() {
  $('#results').hide();
  $('#no-results').hide();
  $('#providers').hide();
  $('#error').hide();
}

$(document).ready(function() {
  let dataAccess = new DataAccess();

  $('form').submit(function(e) {
    e.preventDefault();
    let name = $('#name').val();
    let query = $('#query').val();
    resetDisplay();
    dataAccess.apiCallBetterDoctor(name, query);
    dataAccess.apiCall.then(function(response) {
      dataAccess.apiResponse = response.data;
      dataAccess.parseData();
      if (dataAccess.dataOut.length === 0) {
        $('#no-results').show();
      } else {
        displayProviders(dataAccess.dataOut);
        $('#providers').show();
      }
      $('#loading').hide();
      $('#results').fadeIn();
    }, function(error) {
      $('#error .message').text(`${error}.`);
      $('#loading').hide();
      $('#error').show();
    });
    $('#loading').show();
  });
});
