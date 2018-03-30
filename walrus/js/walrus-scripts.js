$(document).ready(function() {
  $(".effect .clickable").click(function() {
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

  $("span.original").click(function() {
    $("body").removeClass();
  });

  $(".boring-lecture").click(function() {
    $(".boring-lecture").toggleClass("highlight");
  });

});
