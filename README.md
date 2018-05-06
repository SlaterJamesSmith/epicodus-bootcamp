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

| MODELS | | VIEWS | | COMPONENTS |
| ------ | --- | ----- | --- | ---------- |
| 1. Video | | 1. Main | | 1. Search |
| - title : *string* | | 2. Channel | | 2. Browse |
| - channelName : *string* | | 3. Video Playback | | 3. Channel |
| - userName : *string* | | | | 4. Video Player |
| - id : *string* | | | | |

## User Stories

| Status | View | Basic Features | Component |
| :-: | :-: | --- | :-: |
| Done | NAV | Navigate to main page or other key areas. | ROOT |
| Done | MAIN | See lists of suggested videos. | BROWSE |
| | MAIN | Filter video suggestions by genre. | BROWSE |
| Done | MAIN | Click video links to open Video Playback View. | BROWSE |
| Done | VIDEO | Watch and control video playback. | VID PLAYER |

| Status | View | Advanced Features | Component |
| :-: | :-: | --- | :-: |
| | NAV | Search for videos and channels. | SEARCH |
| | CHANNEL | See lists of videos specific to a single channel. | CHANNEL |
| | CHANNEL | Open an About section to see channel info. | CHANNEL |
| | CHANNEL | Click video links to open Video Playback View. | CHANNEL |

## License

_This software is licensed under the MIT license._

Copyright (c) 2018 **Mike Chu**
