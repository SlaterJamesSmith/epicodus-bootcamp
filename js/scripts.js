var converter = function(input) {
  return false;
}






$(document).ready(function() {
  $("#number-form").submit(function(event) {
    var input = $("#input").val();
    $("#result p").text(converter(input));
    event.preventDefault();
  });
});
