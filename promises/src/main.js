import $ from 'jquery';
import { ApiCall } from './backend.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let displayData = function(response) {
  $('#gif-results').append(`<img src="${response.data[0].images.fixed_height.url}">`);
  $('#errors').hide();
}

let showErrors = function(error) {
  $('#errors').text(`There was an error processing your request: ${error.message}. Please try again.`);
  $('#errors').show();
}

$(document).ready(function() {
  let getData = new ApiCall();

  $("#jquery").click(function() {
    let userInput = $('#user-input').val();
    $('#user-input').val("");
    getData.jqueryApiPromise(userInput, displayData, showErrors);
  });

  $("#es6").click(function() {
    let userInput = $('#user-input').val();
    $('#user-input').val("");
    getData.es6ApiPromise(userInput, displayData, showErrors);
  });
});
