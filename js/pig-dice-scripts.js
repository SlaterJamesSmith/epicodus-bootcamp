function rollDice() {
  return diceValue = Math.floor(Math.random() * 6) + 1;
}

$(document).ready(function() {
  var player1Total = 0;
  var player2Total = 0;
  var player1Pot = 0;
  var player2Pot = 0;

  function switchPlayers() {
    $(".turn-pot").text("0");
    $(".buttons").toggle();
  }

  // PLAYER 1 ROLL
  $("#player1 .roll-dice").click(function() {
    var diceValue = rollDice();
    if (diceValue === 1) {
      player1Pot = 0;
      switchPlayers();
    } else {
      player1Pot += diceValue;
    }
    $("#player1 .turn-pot").text(player1Pot);
  });

  // PLAYER 2 ROLL
  $("#player2 .roll-dice").click(function() {
    var diceValue = rollDice();
    if (diceValue === 1) {
      player2Pot = 0;
      switchPlayers();
    } else {
      player2Pot += diceValue;
    }
    $("#player2 .turn-pot").text(player2Pot);
  });

  // PLAYER 1 HOLD
  $("#player1 .end-turn").click(function() {
    player1Total += player1Pot;
    $("#player1 .total-points").text(player1Total);
    switchPlayers();
  });

  // PLAYER 2 HOLD
  $("#player2 .end-turn").click(function() {
    player2Total += player2Pot;
    $("#player2 .total-points").text(player2Total);
    switchPlayers();
  });

});
