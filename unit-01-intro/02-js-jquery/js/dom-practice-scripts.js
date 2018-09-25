$(document).ready(function() {
  $("button#hello").click(function() {
    $("#user").prepend("<li>Hello!</li>");
    $("#webpage").prepend("<li>Why hello there!</li>");
    $("#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("#user").prepend("<li>Goodbye!</li>");
    $("#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("#user").prepend("<li>Stop copying me!</li>");
    $("#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
