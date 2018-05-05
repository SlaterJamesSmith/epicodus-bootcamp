# _YOUTUBE REBUILD_

#### _Epicodus Solo Project - JavaScript - Week 3, May 4, 2018_

#### _By Mike Chu_

## Description

A limited site rebuild of YouTube using Angular.

## Setup/Installation Requirements

#### I. Node & NPM Installs
1. Install Node.js on local machine.
2. Install TypeScript globally: `npm install -g typescript`
3. Install Angular CLI globally: `npm install -g @angular/cli`

#### II. Project Setup
1. Clone repository.
2. In terminal, navigate to project root.
3. Run `npm install` in project root to load required packages.

#### III. View Project
* Development Mode: `ng serve --open`

## Known Bugs

None.

## Technologies Used

* Angular
* JavaScript
* Node.js
* TypeScript

## MVC Overview

| Models | Views | Components |
| ------ | ----- | ---------- |
| Video {<br>title: string,<br>channel: string,<br>url: string,<br>} | Main<br>Channel<br>Video Playback | Search<br>Browse<br>Channel<br>Video Player |

## User Stories

| Status | View | Basic Features | Component |
| :-: | :-: | --- | :-: |
| | NAV | Search for videos and channels. | SEARCH |
| | NAV | Navigate to main page or other key areas. | ROOT |
| | MAIN | See lists of suggested videos. | BROWSE |
| | MAIN | Filter video suggestions by genre. | BROWSE |
| | MAIN | Click video links to open Video Playback View. | BROWSE |
| | CHANNEL | See lists of videos specific to a single channel. | CHANNEL |
| | CHANNEL | Open an About section to see channel info. | CHANNEL |
| | CHANNEL | Click video links to open Video Playback View. | CHANNEL |
| | VIDEO | Watch and control video playback. | VID PLAYER |

## License

_This software is licensed under the MIT license._

Copyright (c) 2018 **Mike Chu**
