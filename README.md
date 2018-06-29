# YouTube Rebuild

**Epicodus Solo Project | React | Week 1 | June 29, 2018**

**By Mike Chu**

## Description

A limited site rebuild of [YouTube](https://www.youtube.com/) using React.

## Setup/Installation Requirements

### I. Project Setup

1. Install Node.js on local machine.

2. Clone repository and navigate to `epicodus-solo-11`.

3. Run `npm install` to load required packages.

### II. View/Build Project

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

### Component/Route Structure

```
+---------+           +------------+           +---------------+
|         |           |            |           |               |
|   App   +-----+-----+   Navbar   +-----+-----+   SidePanel   |
|         |     |     |            |     |     |               |
+----+----+     |     +------------+     |     +---------------+
     |          |                        |
     |          |     +------------+     |     +---------------+
     |          |     |            |     |     |               |
     |          +-----+   Footer   |     +-----+   PopUpMenu   |
     |                |            |           |               |
     |                +------------+           +---------------+
     |
     |
     +------------------+ ROUTES +-------+
                                         |
         +---------------------+---------+----------+--------------------+
         |                     |                    |                    |
         v                     v                    v                    v

      / path             /signin path          /video path          /search path

+-----------------+     +------------+     +-----------------+     +------------+
|                 |     |            |     |                 |     |            |
|   ChannelList   |     |   SignIn   |     |   VideoPlayer   |     |   Search   |
|                 |     |            |     |                 |     |            |
+-+---------------+     +------------+     +-----------------+     +----------+-+
  |                                                                           |
  | +------------------+                                   +----------------+ |
  | |                  |                                   |                | |
  +-+   ChannelStrip   |                                   |   VideoStrip   +-+
    |                  |                                   |                |
    +-+----------------+                                   +----------------+
      |
      | +---------------+
      | |               |
      +-+   VideoCard   |
        |               |
        +---------------+
```


## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Mike Chu**
