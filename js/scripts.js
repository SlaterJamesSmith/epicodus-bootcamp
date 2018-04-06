/// BUSINESS LOGIC ///
function PizzaOrder() {
  this.size = "medium";
  this.toppings = ["pepperoni"];
  this.price;
}

/// USER INTERFACE LOGIC ///
$(document).ready(function() {
  var pizzaQueue = [];

  $("form#order").submit(function(event) {
    event.preventDefault();
    var newPizza = new PizzaOrder();
    pizzaQueue.push(newPizza);

    console.log(pizzaQueue[0]);
  });
});
