function Board (){
  this.coords = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.playerBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.winComs = [
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

Board.prototype.markBoard = function (player, square) {
  this.playerBoard[square] = player;
};

// Board.prototype.checkWin = function () {
//   this.winComs.forEach(function(combo, index) {
//     console.log(this.playerBoard);
//     // combo [0, 1, 2]
//     // playerBoard[0], playerBoard[1], playerBoard[2]
//
//     // if (this.playerBoard[combo[0]] === this.playerBoard[combo[1]] === this.playerBoard[combo[2]] === 'undefined'){
//     //
//     // }
//     if(this.playerBoard[combo[0]] === this.playerBoard[combo[1]] === this.playerBoard[combo[2]]){
//       var player = this.playerBoard[combo[0]];
//       if(player === 'X'){
//         console.log("X wins");
//       }else if(player === 'O'){
//         console.log("O wins");
//       }else{
//         console.log("no winner");
//       }
//
//     }
//
//   })
// };

function checkWin(playerBoard) {
  var winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  var winState = false;
  winCombos.forEach(function(combo) {
    if(playerBoard[combo[0]] === playerBoard[combo[1]] && playerBoard[combo[1]] === playerBoard[combo[2]]) {
      var player = playerBoard[combo[0]];
      if(player === 'X'){
        winState = 'X';
      }else if (player === 'O') {
        winState = 'O';
      }
    }
  });
  console.log("Winner is " + winState);
  return winState
}


$().ready(function() {
  var tttBoard = new Board();
  var mark = "X";

  $(".cell").click(function(e) {
    var id = e.target.id;
    tttBoard.markBoard(mark, parseInt(id));
    $(this).text(mark);
    $(this).unbind();
    if (mark === "X") {
      mark = "O";
    } else {
      mark = "X";
    }
    checkWin(tttBoard.playerBoard);
  });

});
