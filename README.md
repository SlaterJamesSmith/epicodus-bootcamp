# YouTube Rebuild

**Epicodus Solo Project | JavaScript | Week 3 & 4 | May 4, 2018**

**By Mike Chu**

## Description

A limited site rebuild of [YouTube](https://www.youtube.com/) using Angular.

## Setup/Installation Requirements

### I. YouTube Data API v3

1. Log in to [Google API Console](https://console.developers.google.com/apis/).

2. Create new project.

3. Create API key credential and enable **YouTube Data API v3**.

4. Save API key for Part IV Project Setup.

### II. Firebase

1. Create free [Firebase](http://firebase.google.com/) account.

2. In Firebase console, create new project.

3. Name project and select your country/region.

4. From _Project Overview_, navigate to _Develop > Database > **Realtime Database**_.

5. Select _Rules_ and change **.read** and **.write** to `true`, then publish.

6. In _Project Overview_, select option to **add Firebase to web app**.

7. Save credentials for Part IV Project Setup.

### III. Node & NPM Installs

1. Install Node.js on local machine.

2. Install TypeScript globally: `npm install -g typescript`

3. Install Angular CLI globally: `npm install -g @angular/cli@1.7.4`

### IV. Project Setup

1. Clone repository and navigate to project root.

2. Run `npm install` in project root to load required packages.

3. Create new file **api-keys.ts** in `src/app`.

4. In **api-keys.ts**, insert template code blocks from below and update credentials:
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
```
// YouTube API Key
export const youtubeApiConfig = {
  apiKey: ""
};
```

### V. View Project

1. In project root, run `ng serve --open` to view project in development mode.

### VI. Deploy to Firebase

#### A. Firebase Tools Install

1. Install Firebase Tools globally: `npm install -g firebase-tools`

#### B. Production Build

1. In project root, run `ng build --env=prod`.

#### C. Firebase Initialization & Setup

1. Run `firebase login` to open prompt for logging into Google/Firebase account.

2. In project root, run `firebase init` to initialize Firebase.

3. Select **Database** and **Hosting** options, then confirm choices.

4. Select Firebase project to be used for deployment.

5. Accept **database.rules.json** as  *Database Rules* file.

6. Enter `dist` for *public directory*.

7. Select **No** for *single-page app* configuration.

8. Select **No** for overwriting any project files.

#### D. Deployment

1. In project root, run `firebase deploy`.

2. Run `firebase open` to open Firebase options menu.

3. Select **Hosting: Deployed Site** to navigate to deployed site.

## Known Bugs

- Channel uploads are not always populated into carousels in chronological order.
- User can currently save duplicate channels and videos.

## Technologies Used

* Angular
* Firebase
* JavaScript
* Node.js
* TypeScript

## MVC Overview

| MODELS | | VIEWS | | COMPONENTS |
| ------ | --- | ----- | --- | ---------- |
| 1. YTVideo | | 1. Main | | 1. Search |
| 2. YTChannel | | 2. Channel | | 2. Browse |
| 3. User | | 3. Video Playback | | 3. Carousel |
| | | 4. Search | | 4. Channel |
| | | 5. Account | | 5. Video Player |
| | | | | 6. Sign In |
| | | | | 7. User |

## User Stories

| Status | View | Basic Features | Component |
| :-: | :-: | --- | :-: |
| Done | NAV | Navigate to main page or other key areas. | ROOT |
| Done | MAIN | See lists of suggested videos. | BROWSE |
| Done | MAIN | Click video links to open Video Playback View. | BROWSE |
| Done | VIDEO | Watch and control video playback. | VID PLAYER |
| Done | MAIN | Login and sign-out of an account. | SIGN-IN |
| Done | MAIN | Add videos to Favorites. | CAROUSEL |
| Done | MAIN | Add videos to Watch Later. | CAROUSEL |
| Done | MAIN | Add channel to subscription list. | CAROUSEL |
| Done | NAV | Search for videos and channels. | SEARCH |

| Status | View | Advanced Features | Component |
| :-: | :-: | --- | :-: |
| Done | MAIN | Scroll and auto-load more suggestions. | BROWSE |
| | MAIN | Filter video suggestions by genre. | BROWSE |
| | CHNL | See lists of videos specific to a single channel. | CHANNEL |
| | ALL | Login with authentication to access profile. | SIGN-IN |
| Done | ACCT | View or Delete added vidoes / channels. | ACCOUNT |
| | ALL | Cannot save duplicate videos or channels. | AcctService |

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Mike Chu**
