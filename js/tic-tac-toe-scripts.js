function Board (){
  this.coords = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.playerBoard = Array(9);
}

Board.prototype.markBoard = function (player, square) {
  this.playerBoard[square] = player;
};

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
    console.log(tttBoard.playerBoard);
  });

});
