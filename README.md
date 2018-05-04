# _YOUTUBE (LIMITED EDITION)_

#### _Epicodus Solo Project - JavaScript - Week 3, May 4, 2018_

#### _By Mike Chu_

## Description

A limited site rebuild of YouTube.

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

## Specifications

### MVC Overview

#### Models
* Video

#### Views
* Navigation
* Main
* Channel
* Video Playback

#### Components
* **Search:** Provides site-wide search functions.
* **Browse:** Displays suggested videos by genre.
* **Channel:** Displays videos for a specific channel.
* **Channel Info:** Displays info about specific channel.
* **Video Player:** Displays video with playback controls.

### MVP User Stories
|Status|View|User Abilities|Component|
|:----:|:--:|--------------|:-------:|
||NAV|Search for videos and channels.|SEARCH|
||NAV|Navigate to main page or other key areas.|ROOT|
||MAIN|See lists of suggested videos.|BROWSE|
||MAIN|Filter video suggestions by genre.|BROWSE|
||MAIN|Click video links to open Video Playback View.|BROWSE|
||CHANNEL|See lists of videos specific to a single channel.|CHANNEL|
||CHANNEL|Open an About section to see channel info.|CHNL INFO|
||CHANNEL|Click video links to open Video Playback View.|CHANNEL|
||VIDEO|Watch and control video playback.|VID PLAYER|

## License

_This software is licensed under the MIT license._

Copyright (c) 2018 **Mike Chu**
