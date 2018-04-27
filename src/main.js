import $ from 'jquery';
import { DataAccess } from './data-access.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let dataAccess = new DataAccess();
  dataAccess.testMessage();

  $('form').submit(function(e) {
    e.preventDefault();
    let name = $('#name').val();
    let query = $('#query').val();

    let apiCall = dataAccess.apiCallBetterDoctor(name, query);
    apiCall.then(function(response) {
      console.log(response);
    });
  });
});
