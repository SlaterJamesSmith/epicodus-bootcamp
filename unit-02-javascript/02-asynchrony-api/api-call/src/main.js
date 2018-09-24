import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  // API Call with jQuery (AJAX)
  $('#ajax').click(function() {
    let userInput = $('#user-input').val();
    $('#user-input').val('');

    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userInput}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#gif-results').append(`<img src='${response.data[Math.floor(Math.random() * response.data.length)].images.fixed_height.url}'>`);
        $('#errors').hide();
      },
      error: function() {
        $('#errors').text('There was an error processing your request. Please try again.');
        $('#errors').show();
      }
    });
  });

  // API Call with Vanilla JavaScript
  $('#javascript').click(function() {
    let userInput = $('#user-input').val();
    $('#user-input').val('');

    let request = new XMLHttpRequest();
    let url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userInput}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open('GET', url, true);
    request.send();

    function getElements(response) {
      $('#gif-results').append(`<img src='${response.data[Math.floor(Math.random() * response.data.length)].images.fixed_height.url}'>`);
      $('#errors').hide();
    }
  });
});
