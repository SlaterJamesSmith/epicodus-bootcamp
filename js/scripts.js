$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputBase = $("select#base").val();
    var inputTopping1 = $("input:radio[name=topping1]:checked").val();
    var inputTopping2 = $("input:radio[name=topping2]:checked").val();

    $(".name").text(inputName);
    $(".base").text(inputBase);
    $(".topping1").text(inputTopping1);
    $(".topping2").text(inputTopping2);

  });

});
