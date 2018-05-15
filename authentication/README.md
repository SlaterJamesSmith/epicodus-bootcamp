# _User Authentication_

***Angular Extended, May 15, 2018***

***By Mike Chu***

## Description

A practice in authenticating users with AngularFire Authentication Module.

## Setup/Installation Requirements

### I. Firebase Account

1. Create free [Firebase](http://firebase.google.com/) account.

2. In Firebase console, create new project.

3. Name project and select country/region.

4. From *Project Overview*, navigate to Develop > Database > **Realtime Database**.

5. Select *Rules* and change **.read** and **.write** to `true`, then **publish**.

4. In *Project Overview*, select option to **add Firebase to web app**.

5. Save credentials for Part IV Project Setup.

### II. Node.js & NPM Installs

1. Install Node.js on local machine.

2. Install TypeScript globally: `npm install -g typescript`

3. Install Angular CLI globally: `npm install -g @angular/cli@1.7.4`

### III. Project Setup

1. Clone repository and navigate to `authentication`.

3. Run `npm install` to load required packages.

4. Create new **api-keys.ts** file in `authentication/src/app`.

5. In **api-keys.ts**, insert template code block from below and update credentials:
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
- Node.js
