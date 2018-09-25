$(document).ready(function() {
  $(".effect .clickable").click(function() {
    $(".display-regular").fadeToggle();
    $(".display-none").fadeToggle();
  });

  $(".light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });

  $(".dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });

  $(".original").click(function() {
    $("body").removeClass();
  });

  $("#boring-lecture").click(function() {
    $("#boring-lecture").toggleClass("highlight");
  });
});
