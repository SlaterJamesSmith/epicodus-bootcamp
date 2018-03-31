function cost() {
  if ($("select#addin1").val() === "None") {
    return 8.50;
  } else {
    return 9.25;
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputBase = $("select#base").val();
    var inputTopping1 = $("input:radio[name=topping1]:checked").val();
    var inputTopping2 = $("input:radio[name=topping2]:checked").val();
    var inputSauce = $("input:radio[name=sauce]:checked").val();
    var inputAddIn1 = $("select#addin1").val();

    $(".name").text(inputName);
    $(".base").text(inputBase);
    $(".topping1").text(inputTopping1);
    $(".topping2").text(inputTopping2);
    $(".sauce").text(inputSauce);
    $(".addin1").text(inputAddIn1);
    $(".price").text(cost().toFixed(2));

    $("#receipt").show();
  });
});
