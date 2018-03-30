# _EPICODUS - INTRO WEEK 3: Solo Project_

#### _BEEP BOOP Machine, March 30, 2018_

#### By Mike Chu

## Description

This project is a practice in JavaScript Arrays & Looping. A user inputs a single number and the application returns a range of numbers from 0 to the chosen number. However, the numbers are modified by additional rules in the following order of precedence:

1. **Numbers Divisible by 3**
  * Replace with: "I'm sorry, Dave. I'm afraid I can't do that."
2. **Numbers Containing the Digit 1**
  * Replace with: "Boop!"
3. **Numbers Containing the Digit 0**
  * Replace with: "Beep!"

### Specifications

|Program Behavior|Input |Output|
|----------------|------|------|
|Repeats any single digit input.|1|1|
|Replaces 0 with "Beep!"|0|"Beep!"|
|Replaces 1 with "Boop!"|1|"Boop!"|
|Replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."|9|"I'm sorry, Dave. I'm afraid I can't do that."|
|Replaces numbers containing a 0 with "Beep!"|20|"Beep!"|
|Replaces numbers containing a 1 with "Boop!"|21|"Boop!"|
|Applies replacement rules above with the following ranking of precedence: (1) Divisible by Three, (2) Contains a One, (3) Contains a Zero.|120|"I'm sorry, Dave. I'm afraid I can't do that."|
|Generates all numbers from 0 up to the input number.|3|0, 1, 2, 3|
|Operates on all numbers from 0 up to the input number.|3|"Beep!" "Boop!" "I'm sorry, Dave. I'm afraid I can't do that."|

## Setup/Installation Requirements

1. Clone repository.
2. Open index.html in web browser.

## Known Bugs

None.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

_GPL_

Copyright (c) 2018 **_Mike Chu_**
