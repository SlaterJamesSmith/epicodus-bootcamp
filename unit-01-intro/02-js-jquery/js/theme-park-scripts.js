$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    if ($("input:radio[name=height]:checked").val() === "lt-four") {
      $(".ride-list li").removeClass("highlight");
      $(".lt-four").addClass("highlight");
    } else if ($("input:radio[name=height]:checked").val() === "four-to-six") {
      $(".ride-list li").removeClass("highlight");
      $(".four-to-six").addClass("highlight");
    } else {
      $(".ride-list li").removeClass("highlight");
      $(".gt-six").addClass("highlight");
    }
  });
});
