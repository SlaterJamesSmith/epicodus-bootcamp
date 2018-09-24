$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();
    var addressInput = $("#address").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);

    $("#result").show();
  });
});
