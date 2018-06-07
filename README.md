# Beep! Boop! Machine

**Epicodus Solo Project | Intro | Week 3 | March 30, 2018**

**By Mike Chu**

## Description

A user inputs a single number and an optional login name. The application returns a range of numbers from 0 to the chosen number. However, the numbers are modified by additional rules in the following order of precedence:

1. **Numbers Divisible by 3:** Replace with "I'm sorry, Dave. I'm afraid I can't do that."
2. **Numbers Containing the Digit 1:** Replace with "Boop!"
3. **Numbers Containing the Digit 0:** Replace with "Beep!"

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

## Specifications

| Program Behavior | Input | Output |
| --- | --- | --- |
| Outputs range of digits from 0 to input number. | 12 | [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] |
| Replaces numbers containing 0 with "Beep!" | 0 | [ "Beep!" ] |
| Replaces numbers containing 1 with "Boop!" | 1 | [ "Beep!", "Boop!" ] |
| Replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that." | 3 | [ "Beep!", "Boop!", 2, "I'm sorry, Dave. I'm afraid I can't do that." ] |
| Prioritizes replacement rule for numbers containing 1 over replacement rule for numbers containing 0. | 10 | [ "Beep!", "Boop!", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, "I'm sorry, Dave. I'm afraid I can't do that.", 7, 8, "I'm sorry, Dave. I'm afraid I can't do that.", **"Boop!"** ] |
| Prioritizes replacement rule for numbers divisible by 3 over replacement rules for numbers containing 1 or 0. | 12 | [ "Beep!", "Boop!", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, "I'm sorry, Dave. I'm afraid I can't do that.", 7, 8, "I'm sorry, Dave. I'm afraid I can't do that.", **"Boop!"**, **"Boop!"**, **"I'm sorry, Dave. I'm afraid I can't do that."** ] |
| **Bonus Feature:** Replaces numbers divisible by 3 with "I'm sorry, Dave," plus a randomized second phrase, which may include the original "I'm afraid I can't do that." | 12 | [ "Beep!", "Boop!", 2, **"I'm sorry, Dave. I'm afraid I can't do that."**, 4, 5, **"I'm sorry, Dave. Nobody loves you."**, 7, 8, **"I'm sorry, Dave. You have failed."**, "Boop!", "Boop!", **"I'm sorry, Dave. You must die."** ] |

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Mike Chu**
