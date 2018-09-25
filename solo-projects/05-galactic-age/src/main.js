import $ from 'jquery';
import { User } from './solar-year.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    let user = new User(Date.now(), $('#birthdate').val(), $('input:radio[name=birth-sex-origin]:checked').val());
    user.calcEarthAgeData();
    user.calcEarthLifeExpectancy();
    user.calcPlanetData();

    $('#earth .age span').text(user.earthAgeYears);
    $('#earth .life-expectancy span').text(user.earthLifeExpectancy);
    $('#earth .years-left span').text(user.earthExpectedYearsLeft);
    $('#earth .years-past span').text(user.earthYearsPastExpectancy);

    user.planets.forEach(function(planet) {
      $('#results').append('<div id="' + planet.planet + '"><h3>' + planet.planet + ' Years</h3><p class="age">Age: <span>' + planet.ageYears + '</span></p><p class="life-expectancy">Life Expectancy: <span>' + planet.lifeExpectancy + '</span></p><p class="years-left">Expected Years Left: <span>' + planet.expectedYearsLeft + '</span></p><p class="years-past">Years Past Life Expectancy: <span>' + planet.yearsPastExpectancy + '</span></p></div>');
    });

    $('form').hide();
    $('#results').show();
    $('#reset').show();
  });

  $('#reset').click(function() {
    $('form')[0].reset();
    location.reload();
  });
});
