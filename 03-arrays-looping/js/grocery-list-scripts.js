$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var groceryForm = ["item1", "item2", "item3", "item4", "item5"];
    var groceryList = [];

    groceryForm.map(function(item) {
      if ($("#" + item).val() !== "") {
        groceryList.push($("#" + item).val().toUpperCase());
      } else {
        return;
      }
    });

    groceryList.sort();

    groceryList.forEach(function(item) {
      $("ul").append("<li>" + item + "</li>");
    });

    $("form").hide();
    $("#result").show();
  });
});
