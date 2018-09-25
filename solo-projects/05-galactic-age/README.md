# Super Galactic Age Calculator

**Epicodus Solo Project | JavaScript | Week 1 | April 20, 2018**

**By Mike Chu**

## Description

A solar year is the time duration of one revolution around the sun. The planet Earth completes one revolution (one solar year) in 365.25 Earth days, while the planet Mars completes one solar year in 88 Earth days.

Based on a user's Earth-age, this application will calculate the user's relative age on another planet. Calculations of the user's Earth-age in years are based on the Julian year unit of measurement (365.25 days / year).

## Setup/Installation Requirements

### I. Project Setup

1. Install Node.js on local machine.

2. Clone repository and navigate to project folder.

3. Run `npm install` to load required packages.

### II. View Project

- Test Mode: `npm test`

- Development Mode: `npm start`

- Production: `npm run build`

  1. Navigate to `dist` folder.

  2. Open **index.html** in web browser.

## Known Bugs

None.

## Technologies Used

* JavaScript
* Node.js
* Webpack
* Jasmine
* Karma

## Specifications

| Program Behavior | Input | Output |
| --- | --- | --- |
| Given current date of 04/20/2018, determines durational difference (in seconds) between current date and user's birthdate. | "04/20/2017" | 31536000 |
| Converts user's Earth-age from seconds into days. | 31536000 | 365 |
| Converts user's Earth-age from days into years. | 365 | 0.9993 |
| Returns user's Earth-age in Mercury years. (1 Mercury year = 0.24 Earth years) | 1 | 4.1638 |
| Returns user's Earth-age in Venus years. (1 Venus year = 0.62 Earth years) | 1 | 1.6118 |
| Returns user's Earth-age in Mars years. (1 Mars year = 1.88 Earth years) | 1 | 0.5315 |
| Returns user's Earth-age in Jupiter years. (1 Jupiter year = 11.86 Earth years) | 1 | 0.0843 |
| Returns user's life expectancy based on male biological sex origin. | "Male" | 77 |
| Returns user's life expectancy based on average between male and female statistics. | "Average" | 80 |
| Returns user's life expectancy based on female biological sex origin. | "Female" | 83 |
| Returns user's expected remaining life time before expected expiry date on each planet. | "Male", 76 | "Earth: 1", "Mercury: 4.1667", "Venus: 1.6129", "Mars: 0.5319", "Jupiter: 0.0843" |
| Returns user's expected remaining life time after expected expiry date on each planet. | "Male", 78 | "Earth: 0", "Mercury: 0", "Venus: 0", "Mars: 0", "Jupiter: 0" |
| Returns user's life time past expected expiry date on each planet. | "Male", 78 | "Earth: 1", "Mercury: 4.1667", "Venus: 1.6129", "Mars: 0.5319", "Jupiter: 0.0843" |

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Mike Chu**
