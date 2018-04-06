/// BUSINESS LOGIC ///
function PizzaOrder(size) {
  this.size = size;
  this.toppings = ["pepperoni"];
  this.price;
}

/// USER INTERFACE LOGIC ///
$(document).ready(function() {
  var pizzaQueue = [];

  $("form#order").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var newPizza = new PizzaOrder(pizzaSize);
    pizzaQueue.push(newPizza);

    console.log(pizzaQueue);
  });
});
