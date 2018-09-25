$(document).ready(function() {
  $("#chimp").click(function() {
    $(".display-none").hide();
    $("#chimp-info").show();
  });

  $("#lion").click(function() {
    $(".display-none").hide();
    $("#lion-info").show();
  });

  $("#bear").click(function() {
    $(".display-none").hide();
    $("#bear-info").show();
  });
});
