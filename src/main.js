import $ from 'jquery';
import { User } from './solar-year.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    let user = new User();

    $('form').hide();
    $('#results').show();
    $('#reset').show();
  });

  $('#reset').click(function() {
    $('form')[0].reset();
    location.reload();
  });
});
