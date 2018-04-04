function rollDice() {
  return diceValue = Math.floor(Math.random() * 6) + 1;
}

function endTurn() {
  return false;
}

$(document).ready(function() {
  var player1Total = 0;
  var player2Total = 0;
  var player1Pot = 0;
  var player2Pot = 0;

  // PLAYER 1 ROLL
  $(".player1 .roll-dice").click(function() {
    var diceValue = rollDice();
    if (diceValue === 1) {
      player1Pot = 0;
      endTurn();
    } else {
      player1Pot += diceValue;
    }
    $(".player1 .turn-pot").text(player1Pot);
  });

  // PLAYER 2 ROLL
  $(".player2 .roll-dice").click(function() {
    var diceValue = rollDice();
    if (diceValue === 1) {
      player2Pot = 0;
      endTurn();
    } else {
      player2Pot += diceValue;
    }
    $(".player2 .turn-pot").text(player2Pot);
  });

});
