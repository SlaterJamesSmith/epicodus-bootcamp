import $ from 'jquery';
import { DataAccess } from './data-access.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let dataAccess = new DataAccess();
  dataAccess.testMessage();

});
