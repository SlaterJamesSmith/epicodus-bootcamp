// USER INTERFACE LOGIC
$(document).ready(function() {
  var player1Total = 0;
  var player2Total = 0;
  var turnTotal = 0;
  var rollCount = 0;

  function rollDice(player) {
    rollCount ++;
    $("#" + player + " .roll-count").text("Roll " + rollCount);
    var diceValue = Math.floor(Math.random() * 6) + 1;
    if (diceValue === 1) {
      switchPlayers();
    } else {
      turnTotal += diceValue;
    }
    $("#" + player + " .turn-total").text(turnTotal);
    $("#" + player + " .dice-value h2").text(diceValue);
  }

  function switchPlayers() {
    turnTotal = 0;
    rollCount = 0;
    $(".turn-total").text("0");
    $(".buttons .btn").toggle();
  }

  function checkForWin(player, playerTotal) {
    if (playerTotal >= 100) {
      $("#scoreboard").hide();
      $("#winner").show();
      $("#winner h2 span").text(player);
    } else {
      switchPlayers();
    }
  }

  // PLAYER ROLL
  $(".roll-dice").click(function(e) {
    var player = e.target.value;
    rollDice(player);
  });

  // PLAYER HOLD
  $(".end-turn").click(function(e) {
    var player = e.target.value;
    if (player === "player1") {
    player1Total += turnTotal;
    $("#player1 .total-points").text(player1Total);
    checkForWin("Player 1", player1Total);
    } else {
    player2Total += turnTotal;
    $("#player2 .total-points").text(player2Total);
    checkForWin("Player 2", player2Total);
    }
  });

  $("#play-again").click(function() {
    location.reload();
  });
});
