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

    function updateStats() {
      $('#status span').text(tamagotchi.status);
      $('#age span').text(tamagotchi.age);
      $('#food-level span').text(tamagotchi.foodLevel);
      $('#attention-level span').text(tamagotchi.attentionLevel);
      $('#sleep-level span').text(tamagotchi.sleepLevel);
    }

    updateStats();

    setInterval(function() {
      updateStats();
      if (tamagotchi.age < 10) {
        if (tamagotchi.status === "Dead") {
          $("#age").hide();
          $("#food-level").hide();
          $("#attention-level").hide();
          $("#sleep-level").hide();
          $("#controls").hide();
          $("#game-over").show();
          $('#play-room img').attr('src', 'img/infant-dead.png');
          $('#play-room').removeClass("sleeping");
          $('#play-room').addClass("death");
        } else if (tamagotchi.status === "Sleeping") {
          $('#play-room img').attr('src', 'img/infant-sleeping.png');
          $('#play-room').addClass("sleeping");
        } else if (tamagotchi.status === "Alive") {
          $('#play-room img').attr('src', 'img/infant.gif');
          $('#play-room').removeClass("sleeping");
        }
      } else {
        if (tamagotchi.status === "Dead") {
          $("#age").hide();
          $("#food-level").hide();
          $("#attention-level").hide();
          $("#sleep-level").hide();
          $("#controls").hide();
          $("#game-over").show();
          $('#play-room img').attr('src', 'img/adult-dead.png');
          $('#play-room').removeClass("sleeping");
          $('#play-room').addClass("death");
        } else if (tamagotchi.status === "Sleeping") {
          $('#play-room img').attr('src', 'img/adult-sleeping.png');
          $('#play-room').addClass("sleeping");
        } else if (tamagotchi.status === "Alive") {
          $('#play-room img').attr('src', 'img/adult.gif');
          $('#play-room').removeClass("sleeping");
        }
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
    tamagotchi.age = 10;
    $('#age span').text(tamagotchi.age);
  });

  $('#game-over').click(function() {
    location.reload();
  });
});
