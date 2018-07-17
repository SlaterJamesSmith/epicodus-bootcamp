# YouTube Rebuild

**Epicodus Solo Project | React | Week 1 & 2 | June 29, 2018**

**By Mike Chu**

## Description

A limited site rebuild of [YouTube](https://www.youtube.com/) using React.

## Setup/Installation Requirements

### I. YouTube Data API v3

1. Log in to [Google API Console](https://console.developers.google.com/apis/).

2. Create new project.

3. Create API key credential and enable **YouTube Data API v3**.

4. Save API key for Part II Project Setup.

### II. Project Setup

1. Install Node.js on local machine.

2. Clone repository and navigate to `epicodus-solo-11`.

3. Run `npm install` to load required packages.

4. Create new **.env** file.

5. In **.env**, insert template code line from below and update with API key:
```
exports.apiKey = ""
```

### III. View/Build Project

- Development Mode: `npm start`

- Production Build: `npm run build`

  1. Locate build files in `epicodus-solo-11/build`.

## Known Bugs

None.

## Technologies Used

- JavaScript
- React
- Babel
- Webpack

## Specifications

### I. Component/Route Structure

```
+------------------------+           +------------+           +---------------+
|                        |           |            |           |               |
|          App           +-----+-----+   Navbar   +-----+-----+   SidePanel   |
|                        |     |     |            |     |     |               |
|         STATE          |     |     +------------+     |     +---------------+
|   masterChannelList    |     |                        |
|   videoSearchResults   |     |     +------------+     |     +---------------+
|   selectedVideoId      |     |     |            |     |     |               |
|   selectedChannelId    |     +-----+   Footer   |     +-----+   PopUpMenu   |
|   selectorOrigin       |           |            |           |               |
|                        |           +------------+           +---------------+
+-----------+------------+
            |
            |
            +------------+ ROUTES +-----------+
                                              |
                                              |
            +---------------------------+-----+----------------------+----------------+
            |                           |                            |                |
            v                           v                            v                |
                                                                                      |
         / path                   /search path                  /video path           |
                                                                                      |
+-----------------------+   +------------------------+   +------------------------+   |
|                       |   |                        |   |                        |   |
|      ChannelList      |   |        Search          |   |      VideoPlayer       |   |
|                       |   |                        |   |                        |   |
|      STATE USAGE      |   |      STATE USAGE       |   |      STATE USAGE       |   |
|   masterChannelList   |   |   videoSearchResults   |   |   masterChannelList    |   |
|                       |   |                        |   |   videoSearchResults   |   |
+-----------+-----------+   +-----------+------------+   |   selectedVideoId      |   |
            |                           |                |   selectedChannelId    |   |
+-----------+-----------+   +-----------+------------+   |   selectorOrigin       |   |
|                       |   |                        |   |                        |   |
|     ChannelStrip      |   |       VideoStrip       |   +------------------------+   |
|                       |   |                        |                                |
+-----------+-----------+   +------------------------+               +----------------+
            |                                                        |
+-----------+-----------+                                            v
|                       |
|     VideoCarousel     |                                       /signin path
|                       |
+-----------+-----------+                                      +------------+
            |                                                  |            |
+-----------+-----------+                                      |   SignIn   |
|                       |                                      |            |
|       VideoCard       |                                      +------------+
|                       |
+-----------------------+

```


## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Mike Chu**
