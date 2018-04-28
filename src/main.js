import $ from 'jquery';
import { DataAccess } from './data-access.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function displayProviders(result) {
  $('#results .container').empty();
  result.forEach(function(provider) {
    $('#results .container').append(`<div class="provider"><h3>${provider.firstName} ${provider.lastName}</h3></div>`);
    provider.specialties.forEach(function(specialty) {
      $('.provider').last().append(`<h4>${specialty.name}</h4><p>${specialty.description}</p>`);
    });
    $('.provider').last().append('<hr>');
    provider.practices.forEach(function(practice) {
      $('.provider').last().append('<div class="location"></div>');
      if (practice.acceptsNewPatients) {
        $('.provider .location').last().append('<p class="text-success"><strong>Accepting New Patients</strong></p>');
      } else {
        $('.provider .location').last().append('<p class="text-danger"><strong>No New Patients</strong></p>');
      }
      $('.provider .location').last().append(`<p>Location: ${practice.address.street}, ${practice.address.city}, ${practice.address.state} ${practice.address.zip}</p>`);
      if (practice.website !== undefined) {
        $('.provider .location').last().append(`<p>Website: <a href="${practice.website}" target="_blank">${practice.website}</a></p>`);
      }
      practice.phones.forEach(function(phone) {
        $('.provider .location').last().append(`<p>${phone.type}: ${phone.number}</p>`);
      });
    });
  });
}

function resetDisplay() {
  $('#results').hide();
  $('#no-results').hide();
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
      }
      $('#results').show();
    }, function(error) {
      $('#error .message').text(`${error}.`);
      $('#error').show();
    });
  });
});
