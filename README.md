# _YOUTUBE REBUILD_

#### _Epicodus Solo Project - JavaScript - Week 3 & 4, May 4, 2018_

#### _By Mike Chu_

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
5. Select _Rules_ and change **.read** and **.write** to `true`, then **publish**.
4. In _Project Overview_, select option to **add Firebase to web app**.
5. Save credentials for Part IV Project Setup.

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

* Development Mode: `ng serve --open`

## Known Bugs

- Channel uploads are not always populated into carousels in chronological order.

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
| | | | | 7. Account |

## User Stories

| Status | View | Basic Features | Component |
| :-: | :-: | --- | :-: |
| Done | NAV | Navigate to main page or other key areas. | ROOT |
| Done | MAIN | See lists of suggested videos. | BROWSE |
| Done | MAIN | Click video links to open Video Playback View. | BROWSE |
| Done | VIDEO | Watch and control video playback. | VID PLAYER |
| Done | MAIN | Login and sign-out of an account. | SIGN-IN |
| Done | MAIN | Add videos to Favorites. | CAROUSEL |
| | MAIN | Add videos to Watch Later. | CAROUSEL |
| Done | MAIN | Add channel to subscription list. | CAROUSEL |
| | NAV | Search for videos and channels. | SEARCH |

| Status | View | Advanced Features | Component |
| :-: | :-: | --- | :-: |
| Done | MAIN | Scroll and auto-load more suggestions. | BROWSE |
| | MAIN | Filter video suggestions by genre. | BROWSE |
| | CHNL | See lists of videos specific to a single channel. | CHANNEL |
| | ANY | Login with authentication to access profile. | SIGN-IN |
| | ACCT | View or Delete added vidoes / channels. | ACCOUNT |

## License

_This software is licensed under the MIT license._

Copyright (c) 2018 **Mike Chu**
