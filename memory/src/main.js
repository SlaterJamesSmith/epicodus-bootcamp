import $ from 'jquery';
import { Card, createDeck, cardPositions } from './memory.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function isMatch (cardType1, cardType2) {
  if (cardType1 === cardType2) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  var deck = [];
  var cardType1 = null;
  var cardType2 = null;
  var cardPosition1 = null;
  var cardPosition2 = null;

  createDeck(deck);
  cardPositions(deck);

  deck.forEach(function(card) {
    $("td#" + card.position).html('<img src="../img/' + card.type + '.svg" class="display-none" data-card-type="' + card.type + '">');
  });

  $("td").click(function() {
    if (cardType1 === null) {
      cardType1 = $(this).children("img").attr("data-card-type");
      cardPosition1 = $(this).attr("id");
      $(this).children("img").show();
      $(this).addClass("no-click");
    } else {
      cardType2 = $(this).children("img").attr("data-card-type");
      cardPosition2 = $(this).attr("id");
      $(this).children("img").show();
      $(this).addClass("no-click");
      if (!isMatch(cardType1, cardType2)) {
        $("#" + cardPosition1).children().delay(500).fadeOut(500);
        $("#" + cardPosition1).removeClass("no-click");
        $("#" + cardPosition2).children().delay(500).fadeOut(500);
        $("#" + cardPosition2).removeClass("no-click");
      }
      cardType1 = null;
      cardType2 = null;
      cardPosition1 = null;
      cardPosition2 = null;
    }
  });
});
