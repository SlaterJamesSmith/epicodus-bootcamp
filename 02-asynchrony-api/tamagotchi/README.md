# _TAMAGOTCHI_

***Asynchrony & APIs | April 23, 2018***

***Collaborators***

- Mike Chu
- Matt Miller

## Description

A tamagotchi practice project focused on asynchronous functions.

## Setup/Installation Requirements

1. See main project [README.md](../README.md).

## Known Bugs

None.

## Technologies Used

* JavaScript
* Node.js
* Webpack
* Jasmine
* Karma

## Specifications

- Create tamagotchi with a name and 10 points in food, attention, and sleep.

  - Input: Create tamagotchi, "Peepers"
  - Output: "Peepers", "food: 10", "attention: 10", "sleep: 10"

- Tamagotchi loses 1 food point every second.

  - Input: 5 seconds pass
  - Output: "food: 5"

- Tamagotchi loses 1 attention point every 5 seconds.

  - Input: 5 seconds pass
  - Output: "food: 5", "attention: 9"

- Tamagotchi loses 1 sleep point every 10 seconds.

  - Input: 10 seconds pass
  - Output: "food: 0", "attention: 8", "sleep: 9"

- Tamagotchi dies if food, attention, or sleep drops to 0.

  - Input: 10 seconds pass
  - Output: "Tamagotchi Status: Dead"

- Tamagotchi gains 10 food points when fed.

  - Input: 5 seconds pass, Feed tamagotchi
  - Output: "food: 15"

- Tamagotchi gains 10 attention points when played with.

  - Input: 5 seconds pass, Play with tamagotchi
  - Output: "attention: 19"

- Tamagotchi gains 10 sleep points when put to bed.

  - Input: 10 seconds pass, Put tamagotchi to bed
  - Output: "sleep: 19"

- Tamagotchi cannot be interacted with for 10 seconds after being put to bed.

  - Input: Feed tamagotchi
  - Output: "Tamagotchi cannot be interacted with while sleeping"

- Tamagotchi's age increases by 1 each minute.

  - Input: 1 minute passes
  - Output: Age + 1

- Tamagotchi transforms into an adult when it reaches age 10.

  - Input: 10 minutes pass
  - Output: "Tamagotchi evolution: Adult."
