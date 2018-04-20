# _Super Galactic Age Calculator_

#### _Epicodus Solo Project - JavaScript - Week 1, April 20, 2018_

#### _By Mike Chu_

## Description

A solar year is the time duration of one revolution around the sun. The planet Earth completes one revolution (one solar year) in 365 Earth days, while the planet Mars completes one solar year in 88 Earth days.

Based on a user's Earth-age, this application will calculate the user's relative age on another planet.

## Specifications

|Program Behavior|Input|Output|
|----------------|-----|------|
|Given current date of 04/20/2018, determines difference in seconds, between current date and user's birthdate.|"04/20/2017"|31536000|
|Converts user's Earth-age in seconds into years.|31536000|1|
|Returns user's Earth-age in Mercury years. (1 Mercury year = 0.24 Earth years)|1|4.1667|
|Returns user's Earth-age in Venus years. (1 Venus year = 0.62 Earth years)|1|1.6129|
|Returns user's Earth-age in Mars years. (1 Mars year = 1.88 Earth years)|1|0.5319|
|Returns user's Earth-age in Jupiter years. (1 Jupiter year = 11.86 Earth years)|1|0.0843|
|Returns user's life expectancy based on male biological sex origin.|"Male"|77|
|Returns user's life expectancy based on average between male and female statistics.|"Average"|80|
|Returns user's life expectancy based on female biological sex origin.|"Female"|83|
|Returns user's expected remaining life time before expected expiry date on each planet.|"Male", 76|"Earth: 1", "Mercury: 4.1667", "Venus: 1.6129", "Mars: 0.5319", "Jupiter: 0.0843"|
|Returns user's expected remaining life time after expected expiry date on each planet.|"Male", 78|"Earth: 0", "Mercury: 0", "Venus: 0", "Mars: 0", "Jupiter: 0"|
|Returns user's life time past expected expiry date on each planet.|"Male", 78|"Earth: 1", "Mercury: 4.1667", "Venus: 1.6129", "Mars: 0.5319", "Jupiter: 0.0843"|

## Setup/Installation Requirements

1. Install Node.js on local machine.
2. Clone repository.
3. In terminal, navigate to project root.
4. Run "npm install" to load required packages.
5. Run "npm test" to view unit test results.
6. Run "npm run build" to create distribution files.
7. Open dist/index.html in web browser.

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

Copyright (c) 2018 **Mike Chu**
