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
    provider.practices.forEach(function(practice) {
      $('.provider').last().append(`<p>Location: ${practice.address.street}, ${practice.address.city}, ${practice.address.state} ${practice.address.zip}</p>`);
      if (practice.website !== undefined) {
        $('.provider').last().append(`<p>Website: <a href="${practice.website}" target="_blank">${practice.website}</a></p>`);
      }
      practice.phones.forEach(function(phone) {
        $('.provider').last().append(`<p>${phone.type}: ${phone.number}</p>`);
      });
    });
  });
}

$(document).ready(function() {
  let dataAccess = new DataAccess();

  $('form').submit(function(e) {
    e.preventDefault();
    let name = $('#name').val();
    let query = $('#query').val();

    let apiCall = dataAccess.apiCallBetterDoctor(name, query);
    apiCall.then(function(response) {
      let providerResults = dataAccess.parseData(response);
      if (providerResults.length === 0) {
        $('#results .container').html('<p>No results. Your search criteria did not match any health provider information.</p>');
      } else {
        displayProviders(providerResults);
      }
      $('#results').show();
    }, function(error) {
      $('#results').html(`<div class="text-center"><p class="text-danger"><strong>${error}.</strong></p><p>We apologize for the inconvenience. </p><p>Your request cannot be processed at this time. Please try again later.</p></div>`);
      $('#results').show();
    });
  });
});
