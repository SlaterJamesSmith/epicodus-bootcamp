/// BUSINESS LOGIC ///
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price;
}

PizzaOrder.prototype.calcPrice = function() {
  var pizzaCost = 12;
  if (this.size === "large") {
    pizzaCost += 10;
  } else if (this.size === "medium") {
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
    console.log(newPizza);
  });
});
