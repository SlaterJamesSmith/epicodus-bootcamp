$(document).ready(function() {
  $(".clickable").click(function() {
    $(".visible").slideToggle();
    $(".invisible").slideToggle();
  });

  $("span.light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });

  $("span.dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
  });
});
