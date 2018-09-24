# Mars Rover API

**Angular Extended | May 10, 2018**

**By Mike Chu**

## Description

A practice in implementing API data in Angular.

## Setup/Installation Requirements

### I. NASA API Key

1. Apply for [NASA](https://api.nasa.gov) API key.

2. Save API key for Part IV Project Setup.

### II. Firebase Account

1. Create free [Firebase](http://firebase.google.com) account.

2. In Firebase console, create new project.

3. Name project and select country/region.

4. From *Project Overview*, navigate to Develop > Database > **Realtime Database**.

5. Select *Rules* and change **.read** and **.write** to `true`, then publish.

6. In *Project Overview*, select option to **add Firebase to web app**.

7. Save credentials for Part IV Project Setup.

### III. Node.js & NPM Installs

1. Install Node.js on local machine.

2. Install TypeScript globally: `npm install -g typescript`

3. Install Angular CLI globally: `npm install -g @angular/cli@1.7.4`

### IV. Project Setup

1. Clone repository and navigate to `04-angular-extended/mars-rover`.

2. Run `npm install` to load required packages.

3. Create new **api-keys.ts** file in `04-angular-extended/mars-rover/src/app`.

4. In **api-keys.ts**, insert template code blocks from below and update credentials:
```
// NASA Credentials
export const marsRoverApiKey = "";
```
```
// Firebase Credentials
export const masterFirebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
```

### IV. View Project

- Development Mode: `ng serve --open`

## Known Bugs

None.

## Technologies Used

- JavaScript
- TypeScript
- Angular
- Firebase
