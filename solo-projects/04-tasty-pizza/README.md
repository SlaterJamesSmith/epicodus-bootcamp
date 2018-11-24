# Tasty Pizza

**Epicodus Solo Project | Intro | Week 4 | April 6, 2018**

**By Mike Chu**

## Description

 A pizza ordering application. Various options allow users to customize a pizza order, add pizzas to a cart, and obtain order details such as individual pizza prices, total order price, and a pizza count.

## Setup/Installation Requirements

1. Clone repository.

2. Navigate to project root: `solo-projects/04-tasty-pizza`.

3. Open **index.html** in web browser.

## Known Bugs

None.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Specifications

| Program Behavior | Input | Output |
| --- | --- | --- |
| Receives order and creates standardized plain pizza. |Order pizza. | "Medium", "Toppings: Pepperoni" |
| Receives size with order and creates pizza of matching size. | Order "small" pizza. | "Small", "Toppings: pepperoni" |
| Receives 1 topping with order and creates matching pizza. | Order "medium, mushroom" pizza. | "Medium", "Toppings: mushroom" |
| Receives 2 toppings with order and create matching pizza. | Order "large, pepperoni, jalapenos" pizza. | "Large", "Toppings: pepperoni, jalapenos" |
| Receives 2 pizza orders and creates both pizzas. | Order "small, cheese" pizza. + Order "medium, pepperoni" pizza. | "Small", "Toppings: cheese" + "Medium", "Toppings: pepperoni" |
| Correctly calculates and returns price of pizza order. | Order "small, cheese" pizza. | "Small", "Toppings: cheese", "$12.00" |
| Correctly calculates and returns price of pizza order. | Order "medium, cheese" pizza. | "Medium", "Toppings: cheese", "$16.00" |
| Correctly calculates and returns price of pizza order. | Order "large, cheese" pizza. | "Large", "Toppings: cheese", "$22.00" |
| Correctly calculates and returns price of pizza order. | Order "large, all toppings" pizza. | "Large", "Toppings: all", "$32.50" |

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Mike Chu**
