# _Solo Project 4_

#### _Epicodus Solo Project - Intro - Week 4, April 6, 2018_

#### _By Mike Chu_

## Description

Add description.

## Specifications

|Program Behavior|Input |Output|
|----------------|------|------|
|Receives order and creates standardized plain pizza.|orderPizza()|[ { size: "medium", toppings: ["pepperoni"] } ]|
|Receives size with order and creates pizza of matching size.|orderPizza( "small" )|[ { size: "small", toppings: ["pepperoni"] } ]|
|Receives 1 topping with order and creates matching pizza.|orderPizza( "medium", ["pepperoni"] )|[ { size: "medium", toppings: ["pepperoni"] } ]|
|Receives 2 toppings with order and create matching pizza.|orderPizza( "large", ["pepperoni", "jalapenos"] )|[ { size: "large", toppings: ["pepperoni", "jalapenos"] } ]|
|Receives 2 pizza orders and creates both pizzas.|orderPizza( "small", ["cheese"] ), orderPizza( "medium", ["pepperoni"] )|[ { size: "small", toppings: ["cheese"] }, { size: "medium", toppings: ["pepperoni"] } ]|
|Calculates and retains price of existing pizza order.|pizzaOrder.price()|[ { size: "small", toppings: ["cheese"], price: 8} ]|

## Setup/Installation Requirements

1. Visit website link: https://m-chu.github.io/epicodus-solo-project-4/

## Known Bugs

None.

## Support and Contact

Please send comments and questions to Mike Chu at mcihkue@gmail.com.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

_GPL_

Copyright (c) 2018 **Mike Chu**
