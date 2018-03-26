$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var groceryForm = ["item1", "item2", "item3", "item4", "item5"];
    var groceryList = groceryForm.map(function(item) {
      return $("#" + item).val().toUpperCase();
    });

    groceryList.sort();

    groceryList.forEach(function(item) {
      $("ul").append("<li>" + item + "</li>");
    });


    $("form").hide();

  });

  // $(".addItem").click(function() {
  //   $("form").append('<div class=\"form-group\"><label>Item</label><input type=\"text\"></div>');
  //
  // });


});
