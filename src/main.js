import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let tamagotchi;

  $('form').submit(function(e) {
    e.preventDefault();
    tamagotchi = new Tamagotchi($('#name').val());
    tamagotchi.setAge();
    tamagotchi.setFoodLevel();
    tamagotchi.setAttentionLevel();
    tamagotchi.setSleepLevel();

    $('#tamagotchi .petname').text($('form .petname').val());
    setInterval(function() {
      $('#food-level span').text(tamagotchi.foodLevel);
      $('#attention-level span').text(tamagotchi.attentionLevel);
      $('#sleep-level span').text(tamagotchi.sleepLevel);
    }, 1000);

    $('form').hide();
    $('#tamagotchi').show();
  });

  $('#feed').click(function() {
    tamagotchi.feed();
  });

  $('#play').click(function() {
    tamagotchi.playTime();
  });

  $('#sleep').click(function() {
    tamagotchi.sleep();
  });
});
