# YouTube Rebuild

**Epicodus Solo Project | React | Week 1 | June 29, 2018**

**By Mike Chu**

## Description

A limited site rebuild of [YouTube](https://www.youtube.com/) using React.

### Friday Prompt | Dev Notes & Thoughts

#### JUNE 29

NOTES

- 10:10AM | Combed through Angular build and drafted component structure without too much trouble.

- 2:44PM | Rigged up buttons that render icons controlled by props with no problems.

THOUGHTS

- 10:23AM | Focusing purely on design philosophy, Angular and React feel very much the same at this point. Looking back at the YouTube Rebuild in Angular, functional operations dictated component scope and component relationships. In React, I find myself simply re-orienting focus to visual hierarchy to determine component scope and component relationships. There is a perspective shift, but the underlying design process feels very familiar.

- 2:50PM | React leverages modular components very well. Navbar buttons built in Angular were significantly more complicated with very densely packed code for each button. I'm finding that in React, the component separation is much cleaner and code is easier to navigate. Very dynamic and very light weight.

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
