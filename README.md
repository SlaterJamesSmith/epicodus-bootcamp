# _EPICODUS - JAVASCRIPT PROJECT TEMPLATE_

#### _[Subtitle], [Date]_

#### _By [Name]_

## Description

Add description.

## Specifications

- Create tamagotchi with a name and 10 points in food, attention, and sleep.
  - Input: Create tamagotchi, "Peeper"
  - Output: "Peeper", "food: 10", "attention: 10", "sleep: 10"

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
  - Output: "Tamagotchi Died: True"

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
  - Output: "Tamagotchi has grown into an adult."

## Setup/Installation Requirements

1. Clone repository.
2. Run "npm install" in project root to load required packages.

## Known Bugs

None.

## Technologies Used

* JavaScript
* Node.js
* Jasmine
* Karma
* Webpack

## License

_This software is licensed under the MIT license._

Copyright (c) 2018 **[Name]**
