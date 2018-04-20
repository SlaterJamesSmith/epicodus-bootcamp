# _EPICODUS - JAVASCRIPT - WEEK 1_

#### _RPG Test Driven Development Practice, April 18, 2018_

#### _Collaborators_

* Mike Chu
* Cory West-Forbes

## Description

An RPG practice project focused on Test Driven Development.

## Specifications

### Character Creation
- Creates character based on character creation input:
    - Input: "John, 10 Strength, 10 Dexterity, 5 Intelligence"
    - Output: "John", "Str: 10", "Dex: 10", "Int: 5"
- Adds health and inventory to character after creation:
    - Input: Create character
    - Output: "Health: 20", "Inventory: ['Bandage', 'Bat']"

### Character Movement
- Given player coordinates (0,0), updates player's x-coordinate by one unit when horizontal movement is initiated.
    - Input: "Right"
    - Output: (1,0)
- Given player coordinates (1,0), updates player's y-coordinate by one unit when vertical movement is initiated.
    - Input: "Down"
    - Output: (1,1)
- Given player coordinates (0,0), prevents player movement past limit of coordinate system.
    - Input: "Up"
    - Output: (0,0)
- Generates a random number between 0 and 1 with each character move:
    - Input: Move
    - Output: 0 < number < 1

### Battle System
**Player Combat**
- Initiates battle encounter when random number is less than 0.2:
  - Input: 0.15
  - Output: Run battleEncounter
- Determines Hit or Miss based on player attribute when player attacks:
  - Input: Attack
  - Output: Hit or Miss
- Calculates hit damage dealt by player based on player attribute:
  - Input: Successful Hit
  - Output: 5
- Applies damage dealt by player to enemy health count:
  - Input: 5
  - Output: Enemy health - 5
- Removes enemy when enemy health decreases below zero:
  - Input: Enemy health = 0
  - Output: Remove enemy
- Applies experience points to player when enemy dies:
  - Input: Enemy removed
  - Output: Player XP + XP
- Ends combat when last enemy is removed:
  - Input: Enemy count = 0
  - Output: End combat

**Enemy Combat**
- Initiates enemy attack and determines Hit or Miss:
  - Input: Attack
  - Output: Hit or Miss
- Calculates hit damage dealt by enemy:
  - Input: Successful Hit
  - Output: 5
- Applies damage dealt by enemy to player health count:
  - Input: 5
  - Output: player health - 5
- Ends game when player health decreases below zero:
  - Input: player health = 0
  - Output: Game over

### Level Up
- Increases player level when XP cap is reached:
  - Input: 100/100 XP
  - Output: Player level + 1
- Resets player xp and adds remainder over previous cap:
  - Input: 115/100 XP
  - Output: 15/100 XP
- Increases player max health after level up:
  - Input: player level + 1
  - Output: player max health + 5
- Adds 3 unused attribute points to player after level up:
  - Input: player level + 1
  - Ouput: current unused attribute points + 3

### Gameplay Controls
- Adds 1 attribute point to corresponding attribute if unused is greater than 0:
  - Input: Str + 1
  - Output: Current Str + 1
- Subtracts 1 unused attribute point when player uses attribute point:
  - Input: Str + 1
  - Output: Current unused attribute point - 1

### Inventory Use
- Adds health to player when bandage is used:
  - Input: Use Bandage
  - Output: Player health + 5
- Equips weapon/armor when player selects weapon/armor:
  - Input: Select "Bat"
  - Output: "Equipped: Bat"

### End Game Condition
- Spawns boss encounter when player reaches level 3:
  - Input: Player level = 3
  - Ouput: Initiate boss encounter
- Initiates end game sequence after boss and all enemies are removed:
  - Input: Enemy count = 0
  - Output: End game sequence


## Setup/Installation Requirements

1. See main project [README.md](../README.md).

## Known Bugs

None.

## Technologies Used

* JavaScript
* Node.js
* Jasmine
* Karma
* Webpack
