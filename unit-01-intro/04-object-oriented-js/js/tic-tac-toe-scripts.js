function Game (){
  this.playerBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
}

Game.prototype.markBoard = function (player, space) {
  this.playerBoard[space] = player;
};

Game.prototype.checkWin = function (playerBoard) {
  var winState = false;
  this.winCombos.forEach(function(combo) {
    if(playerBoard[combo[0]] === playerBoard[combo[1]] && playerBoard[combo[1]] === playerBoard[combo[2]]) {
      var playerMark = playerBoard[combo[0]];
      if(playerMark === 'X'){
        winState = 'X';
      }else if (playerMark === 'O') {
        winState = 'O';
      }
    }
  });
  return winState
}

$(document).ready(function() {
  var game = new Game();
  var mark = "X";

  function switchPlayer() {
    if (mark === "X") {
      mark = "O";
    } else {
      mark = "X";
    }
  }

  function reportWin(winCheck) {
    if (winCheck === 'X' || winCheck === 'O') {
      if (winCheck === 'X') {
        $("#game-status h2").text("X WINS!");
      } else {
        $("#game-status h2").text("O WINS!");
      }
      $("#tic-tac-toe-grid td").unbind();
    }
  }

  $("#tic-tac-toe-grid td").click(function(e) {
    var id = e.target.id;
    $(this).text(mark);
    $(this).unbind();
    game.markBoard(mark, parseInt(id));
    winCheck = game.checkWin(game.playerBoard);
    reportWin(winCheck);
    switchPlayer();
  });

  $(".restart-game").click(function() {
    location.reload();
  });
});
