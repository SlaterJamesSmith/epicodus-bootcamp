$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputDesc = $("input#desc").val();
    var inputDate = $("input#date").val();
    var inputTimeStart = $("input#time-start").val();
    var inputTimeEnd = $("input#time-end").val();

    $(".name").text(inputName);
    $(".desc").text(inputDesc);
    $(".date").text(inputDate);
    $(".time-start").text(inputTimeStart);
    $(".time-end").text(inputTimeEnd);

    $("#result").show();
  });
});
