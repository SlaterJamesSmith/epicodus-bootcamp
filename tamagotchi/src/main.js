import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let tamagotchi;
  let gameClock;

  function updateStats() {
    $('#status span').text(tamagotchi.status);
    $('#age span').text(tamagotchi.age);
    $('#food-level span').text(tamagotchi.foodLevel);
    $('#attention-level span').text(tamagotchi.attentionLevel);
    $('#sleep-level span').text(tamagotchi.sleepLevel);
  }

  function endGame() {
    clearInterval(gameClock);
    $('#controls').hide();
    $('#start-over').show();
  }

  $('form').submit(function(e) {
    e.preventDefault();
    tamagotchi = new Tamagotchi($('#name').val());
    $('#tamagotchi .petname').text($('form .petname').val());
    tamagotchi.setAge();
    tamagotchi.setFoodLevel();
    tamagotchi.setAttentionLevel();
    tamagotchi.setSleepLevel();
    updateStats();
    gameClock = setInterval(function() {
      updateStats();
      if (tamagotchi.status === 'Dead') {
        endGame();
      }
    }, 1000);
    $('form').hide();
    $('#tamagotchi').show();
  });

  $('#feed').click(function() {
    tamagotchi.feed();
    $('#food-level span').text(tamagotchi.foodLevel);
  });

  $('#play').click(function() {
    tamagotchi.playTime();
    $('#attention-level span').text(tamagotchi.attentionLevel);
  });

  $('#sleep').click(function() {
    tamagotchi.sleep();
    $('#sleep-level span').text(tamagotchi.sleepLevel);
    $('#status span').text(tamagotchi.status);
  });

  $('#steroids').click(function() {
    tamagotchi.grow();
    $('#age span').text(tamagotchi.age);
  });

  $('#start-over').click(function() {
    location.reload();
  });
});
