$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    if ($("input:radio[name=height]:checked").val() === "lt-four") {
      $(".ride-section div").removeClass("blah");
      $(".lt-four").addClass("blah");

    } else if ($("input:radio[name=height]:checked").val() === "four-to-six") {
      $(".ride-section div").removeClass("blah");
      $(".four-to-six").addClass("blah");
    } else {
      $(".ride-section div").removeClass("blah");
      $(".gt-six").addClass("blah");
    };

  });

});
