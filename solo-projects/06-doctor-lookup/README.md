# Doctor Lookup

**Epicodus Solo Project | JavaScript | Week 2 | April 27, 2018**

**By Mike Chu**

## Description

Access up-to-date information on healthcare providers in Portland, OR, through BetterDoctor's validated provider directory. Find doctors by name or search for a medical issue to obtain a list of doctors with related specialties.

## Setup/Installation Requirements

### I. BetterDoctor API Key

1. Apply for [BetterDoctor](https://developer.betterdoctor.com/) API key.

2. Save API key for Part II Project Setup.

### II. Project Setup

1. Install Node.js on local machine.

2. Clone repository and navigate to project folder.

3. Run `npm install` to load required packages.

4. Create new **.env** file.

5. In **.env**, insert template code line from below and update with API key:
```
exports.apiKey = ""
```

### III. View Project

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

## Specifications

| Program Behavior | Input | Output |
| --- | --- | --- |
| When search is performed on name, returns list of matching doctor names with contact and practice details. | "John Smith" | "Name: John Smith, Contact: Address & Phone, Practice: Primary Care" |
| When search is performed on medical issue, returns list of doctors with matching or related specialty. | "Skin Rash" | "Name: Doctor One, Contact: Address & Phone, Practice: Dermatologist"<br><br>"Name: Doctor Two, Contact: Address & Phone, Practice: Dermatologist"<br><br>"Name: Doctor Three, Contact: Address & Phone, Practice: Dermatologist" |
| When search fails to complete, returns message confirming error instance. | API Call Fails | "An error was encountered and your search was not completed. Please try again later." |
| When search comes back empty, returns message confirming an empty result. | "Dr. Quinn Medicine Woman" | "Your search did not match any health provider information." |

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Mike Chu**
