$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    if ($("input:radio[name=age-check]:checked").val() === "over18") {
      $("#age-check").hide();
      $("#votinginfo").show();
    } else {
      $("#age-check").hide();
      $("#novoting").show();
    };

  });

});
