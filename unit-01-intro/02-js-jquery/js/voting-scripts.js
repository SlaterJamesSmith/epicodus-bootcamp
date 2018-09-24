$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $(".display-none").hide();

    if ($("input:radio[name=age-check]:checked").val() === "over18") {
      $("#voting-info").show();
    } else {
      $("#no-voting").show();
    }
  });
});
