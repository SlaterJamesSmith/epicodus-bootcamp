$(document).ready(function() {
  $("form").submit(function(event) {
    $(".invis").hide();
    var height = parseInt($("#height").val());
    var weight = parseInt($("#weight").val());
    var age = parseInt($("#age").val());
    var result = height + weight + age;

    if (result > 7) {
      $(".lou").show();
    } else if (8 > result && result > 5) {
      $(".hulk").show();
    } else  {
      $(".hogan").show();
    };



    event.preventDefault();
  });
});
