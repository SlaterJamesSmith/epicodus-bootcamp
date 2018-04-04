function rollDice() {
  return diceValue = Math.floor(Math.random() * 6) + 1;
}

$(document).ready(function() {
  var player1Total = 0;
  var player2Total = 0;
  var player1Pot = 0;
  var player2Pot = 0;
  var rollCount = 0;

  function switchPlayers() {
    player1Pot = 0;
    player2Pot = 0;
    rollCount = 0;
    $(".turn-pot").text("0");
    $(".buttons").toggle();
  }

  function checkForWin(player, playerTotal) {
    if (playerTotal >= 1) {
      $("#scoreboard").hide();
      $("#winner").show();
      $("#winner .winner").text(player);
    } else {
      switchPlayers();
    }
  }

  function showDiceFace(player, diceValue) {
    $("#" + player + " .dice div").removeClass();
    $("#" + player + " .dice div").addClass("face" + diceValue);
  }

  function playAgain() {
    player1Total = 0;
    player2Total = 0;
    player1Pot = 0;
    player2Pot = 0;
    rollCount = 0;
    $("#scoreboard").show();
    $("#winner").hide();
    $("#player1 .buttons").show();
    $("#player2 .buttons").hide();
    $(".total-points").text(0);
    $(".turn-pot").text(0);
    $(".roll-count").empty();
    $(".dice div").removeClass();
  }

  // PLAYER 1 ROLL
  $("#player1 .roll-dice").click(function() {
    rollCount ++;
    var diceValue = rollDice();
    $("#player1 .roll-count").text("Roll " + rollCount);
    showDiceFace("player1", diceValue);
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
    rollCount ++;
    var diceValue = rollDice();
    $("#player2 .roll-count").text("Roll " + rollCount);
    showDiceFace("player2", diceValue);
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
    checkForWin("Player 1", player1Total);
  });

  // PLAYER 2 HOLD
  $("#player2 .end-turn").click(function() {
    player2Total += player2Pot;
    $("#player2 .total-points").text(player2Total);
    checkForWin("Player 2", player2Total);
  });

  $("#play-again").click(function() {
    playAgain();
  });

});
