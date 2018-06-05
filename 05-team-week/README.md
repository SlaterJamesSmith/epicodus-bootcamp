# EPICODUS - 02 - JavaScript - Week 5

**Team Week | Tool Library | May 14, 2018**

**Collaborators**

- Johnny Alt
- Pablo Barreyro
- Adriana Chen
- Mike Chu
- Adrian Messado

## Description

A tool-share application that allows users to checkout tools on a temporary loan basis similar to traditional libraries.

## Setup/Installation Requirements

### I. Firebase Account

1. Create free [Firebase](http://firebase.google.com) account.

2. In Firebase console, create new project.

3. Name project and select country/region.

4. From *Project Overview*, navigate to Develop > Database > **Realtime Database**.

5. Select *Rules* and change **.read** and **.write** to `auth != null`, then publish.

6. From *Project Overview*, navigate to Develop > **Authentication**.

7. Select *Sign-In Method*, enable **Email/Password**, then save.

8. In *Project Overview*, select option to **add Firebase to web app**.

9. Save credentials for Part III Project Setup.

### II. Node & NPM Installs

1. Install Node.js on local machine.

2. Install TypeScript globally: `npm install -g typescript`

3. Install Angular CLI globally: `npm install -g @angular/cli@1.7.4`

### III. Project Setup

1. Clone repository and navigate to `05-team-week`.

2. Run `npm install` to load required packages.

3. Create new **api-keys.ts** file in `05-team-week/src/app`.

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

- None.

## Technologies Used

* Angular
* Firebase
* JavaScript
* Node.js
* TypeScript

## User Stories

| Status | View | Basic Features | Component |
| :-: | :-: | --- | :-: |
| Done | Tool | Browse library of tools. | ToolList |
| | Tool | View individual tools. | ToolDetail |
| Done | Register | Register a new user account. | Auth |
| Done | Login | Login into an existing account. | Auth |
| | Tool | Select tools for checkout. | ToolList |
| | User | View checked out tools. | UserDash |
