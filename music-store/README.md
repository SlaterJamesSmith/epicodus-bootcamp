# _EPICODUS - JAVASCRIPT - WEEK 4_

#### _Music Store, May 7, 2018_

## Description

A marketplace website for a music store.

## Setup/Installation Requirements

### I. Firebase Account

1. Create free [Firebase](http://firebase.google.com/) account.
2. In Firebase console, create new project.
3. Name project and select your country/region.
4. From Project Overview, navigate to Develop > Database > **Realtime Database**.
5. Select Rules and change **.read** and **.write** to `true`, then **publish**.
4. In Project Overview, select option to **add Firebase to web app**.
5. Save credentials for Part III Project Setup.

### II. Node & NPM Installs

1. Install Node.js on local machine.
2. Install TypeScript globally: `npm install -g typescript`
3. Install Angular CLI globally: `npm install -g @angular/cli@1.7.4`

### III. Project Setup

1. Clone repository.
2. In terminal, navigate to project root: `music-store`.
3. Run `npm install` in project root to load required packages.
4. Create new file **api-keys.ts** in `music-store/src/app`.
5. In **api-keys.ts**, copy in code from below and update with your Firebase credentials:
```
export const masterFirebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
```

### IV. View Project

* Development Mode: `ng serve --open`

### V. Website Functions


* Add single albums to database on **Admin** page.
  * Firebase will auto-generate keys for each album.
* Add multiple albums to database via JSON import in Firebase Console.
  * Album data structure:
  ```
  Album {
    artist: string
    description: string
    id: string (unique value required)
    title: string
  }
  ```

## Known Bugs

None.

## Technologies Used

* Angular
* Firebase
* JavaScript
* Node.js
* TypeScript
