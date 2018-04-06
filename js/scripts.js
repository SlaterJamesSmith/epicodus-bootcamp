/// BUSINESS LOGIC ///
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price;
}

PizzaOrder.prototype.calcPrice = function() {
  var pizzaCost = 12;
  if (this.size === "Large") {
    pizzaCost += 10;
  } else if (this.size === "Medium") {
    pizzaCost += 6;
  }
  if (this.toppings.length > 2) {
    pizzaCost += 1.5 * (this.toppings.length - 2);
  }
  this.price = pizzaCost;
}

/// USER INTERFACE LOGIC ///
$(document).ready(function() {
  var pizzaQueue = [];
  var orderNumber = 0;

  function addToCart() {
    $("#order-cart").append("<div id=\"order" + orderNumber + "\" class=\"pizza\">" + "<h3>Size: " + pizzaQueue[orderNumber].size + "</h3>" + "<h3>Toppings:</h3>" + "<ul></ul>" + "<h3>Price: &dollar;" + pizzaQueue[orderNumber].price.toFixed(2) + "</h3>" + "<button class=\"btn btn-danger\">Remove</button>" + "</div>");
    pizzaQueue[orderNumber].toppings.forEach(function(topping) {
      $("#order" + orderNumber + " ul").append("<li>" + topping + "</li>");
    })
    $("#order" + orderNumber + " button").click(function() {
      $(this).parent().remove();
    });
    orderNumber ++;
  }

  $("form#order").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var selectedTopping = $(this).val();
      toppings.push(selectedTopping);
    });
    var newPizza = new PizzaOrder(pizzaSize, toppings);
    newPizza.calcPrice();
    pizzaQueue.push(newPizza);
    addToCart();
  });
});
