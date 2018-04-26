# _EPICODUS - JAVASCRIPT - WEEK 2_

#### _API Application, April 25, 2018_

#### _Collaborators_

* Pablo Barreyro
* Mike Chu

## Description

Add description.

## Specifications

- Takes two dates and returns coordinates, location names, and magnitudes of earthquakes that occurred.
  - Input: "01/01/2017", "01/01/2018"
  - Output: [Event{coordinates:, name:, magnitude:},<br>Event{...},<br>Event{...}, ...]
- Passes error message back if earthquakes API call is rejected.
  - Input: "01/01/2017", "01/01/2018"
  - Output: "Sorry, we experienced a 401 error. Try again later."
- Maps locations on Google Maps.
  - Input: "01/01/2017", "01/01/2018"
  - Output: [display locations as points on map]
- Maps locations on Google Maps with magnitudes displayed by circles.
  - Input: "01/01/2017", "01/01/2018"
  - Output: [display locations as sized circles on map]
- Passes error message back if maps API call is rejected.
  - Input: "01/01/2017", "01/01/2018"
  - Output: "Sorry, we experienced a 401 error. Try again later."

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
