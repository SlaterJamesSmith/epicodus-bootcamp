# Super Tamagotchi

**Epicodus Capstone Project | July 13, 2018**

**By Mike Chu**

## Description

A standard tamagotchi (digital pet) game with robust animated visual feedback.

## Setup/Installation Requirements

### I. Project Setup

1. Install Node.js on local machine.

2. Clone repository and navigate to `epicodus-solo-12`.

3. Run `npm install` to load required packages.

### II. View/Build Project

- Development Mode: `npm start`

- Production Build: `npm run build`

  1. Locate build files in `epicodus-solo-12/build`.

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
+---------+
|         |
|   App   +-----+
|         |     |
+---------+     |
                |
                |
+---------+     |     +------------+           +----------+
|         |     |     |            |           |          |
|   Nav   +-----+-----+   Router   +-----+-----+   Home   |
|         |           |            |     |     |          |
+---------+           +------------+     |     +----------+
                                         |
                                         |
+----------------------------------------+
|
|
|    +--------------+     +--------------+     +----------------+
|    |              |     |              |     |                |
+----+   TamaHome   +-----+   TamaRoom   +-----+   Tamagotchi   |
     |              |     |              |     |                |
     +--------------+     +--------------+     +----------------+
```

Copyright (c) 2018 **Mike Chu**
