$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputDesc = $("input#desc").val();
    var inputDate = $("input#date").val();
    var inputTimeStart = $("input#timestart").val();
    var inputTimeEnd = $("input#timeend").val();

    $(".name").text(inputName);
    $(".desc").text(inputDesc);
    $(".date").text(inputDate);
    $(".timestart").text(inputTimeStart);
    $(".timeend").text(inputTimeEnd);

    $(".panel").show();
  });
});
