# Tamagotchi

**Managing State | July 3, 2018**

**Collaborators**

- Cameron Button
- Mike Chu

## Description

A tamagotchi game using React.

## Setup/Installation Requirements

### I. Project Setup

1. Install Node.js on local machine.

2. Clone repository and navigate to `02-managing-state/tamagotchi`.

3. Run `npm install` to load required packages.

### II. View/Build Project

- Development Mode: `npm start`

- Production Build: `npm run build`

  1. Locate build files in `02-managing-state/tamagotchi/build`.

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
+---------+
|         |
|   App   |
|         |
+----+----+
     |
     +-----------+-------------------+--------------------+---------------------+
     |           |                   |                    |                     |
     |           |                   |                    |                     |
     |   +-------+-------+   +-------+-------+   +--------+-------+   +---------+---------+
     |   |               |   |               |   |                |   |                   |
     |   |   StatusBar   |   |   ActionBar   |   |   EnvEffects   |   |   StatusEffects   |
     |   |               |   |               |   |                |   |                   |
     |   +---------------+   +-------+-------+   +--------+-------+   +---------+---------+
     |                               |                    |                     |
     |                               |                    |                     |
     |                       +-------+-------+     +------+------+      +-------+--------+
     |                       |               |     |             |      |                |
     |                       |   ActionBtn   |     |   EnvIcon   |      |   StatusIcon   |
     |                       |               |     |             |      |                |
     |                       +---------------+     +-------------+      +----------------+
     |
     |
     |
     +---+ ROUTES +---+-------------+----------------------+--------------------+
                      |             |                      |                    |
                      |             |                      |                    |
                      |   +---------+--------+   +---------+--------+   +-------+--------+
                      |   |                  |   |                  |   |                |
                      |   |   UnhappyState   |   |   NeutralState   |   |   HappyState   |
                      |   |                  |   |                  |   |                |
                      |   +------------------+   +------------------+   +----------------+
                      |
                      |
                      +-------------+-------------------+------------------+
                      |             |                   |                  |
                      |             |                   |                  |
                      |     +-------+-------+   +-------+------+   +-------+--------+
                      |     |               |   |              |   |                |
                      |     |   PlayState   |   |   EatState   |   |   SleepState   |
                      |     |               |   |              |   |                |
                      |     +---------------+   +--------------+   +----------------+
                      |
                      |
                      +-------------+-------------------+
                                    |                   |
                                    |                   |
                            +-------+--------+   +------+-------+
                            |                |   |              |
                            |   DeathState   |   |   Error404   |
                            |                |   |              |
                            +----------------+   +--------------+
```
