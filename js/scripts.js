

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = cryptoSquare(input);
    $("#result p").text(result);
  });

});
