# User Authentication

**Angular Extended | May 15, 2018**

**By Mike Chu**

## Description

A practice in authenticating users with AngularFire Auth Module.

## Setup/Installation Requirements

### I. Firebase Account

1. Create free [Firebase](http://firebase.google.com) account.

2. In Firebase console, create new project.

3. Name project and select country/region.

4. From *Project Overview*, navigate to Develop > Database > **Realtime Database**.

5. Select *Rules* and change **.read** and **.write** to `true`, then publish.

6. From *Project Overview*, navigate to Develop > **Authentication**.

7. Select *Sign-In Method*, enable **Google**, then save.

8. In *Project Overview*, select option to **add Firebase to web app**.

9. Save credentials for Part III Project Setup.

### II. Node.js & NPM Installs

1. Install Node.js on local machine.

2. Install TypeScript globally: `npm install -g typescript`

3. Install Angular CLI globally: `npm install -g @angular/cli@1.7.4`

### III. Project Setup

1. Clone repository and navigate to `04-angular-extended/authentication`.

2. Run `npm install` to load required packages.

3. Create new **api-keys.ts** file in `04-angular-extended/authentication/src/app`.

4. In **api-keys.ts**, insert template code block from below and update credentials:
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
