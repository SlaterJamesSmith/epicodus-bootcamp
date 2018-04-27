import $ from 'jquery';
import { DataAccess } from './data-access.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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
        $('#results').append("No results. Your search criteria did not match any health provider information.");
      }
      $('#results').show();
    }, function(error) {
      $('#results').html(`<div class="text-center"><p class="text-danger">${error}.</p><p>We apologize for the inconvenience. </p><p>Your request cannot be processed at this time. Please try again later.</p></div>`);
      $('#results').show();
    });
  });
});
