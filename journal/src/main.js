import $ from 'jquery';
import { Entry } from './journal';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault();

    var date = $("#date").val();
    var title = $("#entry-title").val();
    var body = $("#entry-body").val();
    var newEntry = new Entry(date, title, body);

    $("#journal").append('<p>' + date + '</p>' +
                        '<h2>' + title + '</h2>' +
                        '<p>' + newEntry.teaser + '</p>' +
                        '<p>Word Count: ' + newEntry.wordCount + '</p>' +
                        '<p>Vowel Count: ' + newEntry.vowelCount + '</p>' +
                        '<p>Consonant Count: ' + newEntry.consonantCount + '</p>');

  });

});
