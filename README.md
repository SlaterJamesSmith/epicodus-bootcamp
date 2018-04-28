# _DOCTOR LOOKUP_

#### _Epicodus Solo Project - JavaScript - Week 2, April 27, 2018_

#### _By Mike Chu_

## Description

Access up-to-date information on healthcare providers in Portland, OR, through BetterDoctor's validated provider directory. Find doctors by name or search for a medical issue to obtain a list of doctors with related specialties.

## Specifications

|Program Behavior|Input|Output|
|----------------|-----|------|
|When search is performed on name, returns list of matching doctor names with contact and practice details.| "John Smith"|"Name: John Smith, Contact: Address & Phone, Practice: Primary Care"|
|When search is performed on medical issue, returns list of doctors with matching or related specialty.|"Skin Rash"|"Name: Doctor One, Contact: Address & Phone, Practice: Dermatologist"<br><br>"Name: Doctor Two, Contact: Address & Phone, Practice: Dermatologist"<br><br>"Name: Doctor Three, Contact: Address & Phone, Practice: Dermatologist"|
|When search fails to complete, returns message confirming error instance.|API Call Fails|"An error was encountered and your search was not completed. Please try again later."|
|When search comes back empty, returns message confirming an empty result.|"Dr. Quinn Medicine Woman"|"Your search did not match any health provider information."|

## Setup/Installation Requirements

**API Key Requirements**
* BetterDoctor API.

**Installation**

1. Install Node.js on local machine.
2. Clone repository.
3. In terminal, navigate to project root.
4. Create **.env file** and save API key within.
5. Run "npm install" to load required packages.
6. Run "npm run build" to create distribution files.
7. Open dist/index.html in web browser.

## Known Bugs

None.

## Technologies Used

* JavaScript
* Node.js
* Webpack

## License

_This software is licensed under the MIT license._

Copyright (c) 2018 **Mike Chu**
