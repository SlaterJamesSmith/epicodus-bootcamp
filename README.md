# _Tic Tac Toe_

#### _Epicodus - Intro - Week 4_

#### _Object-Oriented JavaScript Practice, April 4, 2018_

#### _By Mike Chu_

## Description

Add description.

## Specifications

*TTT = Tic Tac Toe*

- Creates a TTT grid.
  - Input: Create board.
  - Ouput: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

|Tic|Tac|Toe|
|---|---|---|
|0|1|2|
|3|4|5|  
|6|7|8|
- Marks a space in the TTT grid with "X".
  - Input: Mark space 4.
  - Ouput: [ 0, 1, 2, 3, "X", 5, 6, 7, 8 ]
- Alternates marks with "O".
  - Input: Mark space 4, then 2, then 3.
  - Output: [ 0, 1, "O", "X", "X", 5, 6, 7, 8 ]
- Prevents marking over other marks.
  - Input: Mark space 4 twice.
  - Output: [ 0, 1, 2, 3, "X", 5, 6, 7, 8 ]
- Flags win state when 3 of the same marks appear in a straight line.
  - Input: Reach 3 marks in a line.
  - Ouput: Win = True

|Tic|Tac|Toe|
|---|---|---|
|"X"|"O"|"O"|
|3|"X"|5|  
|6|7|"X"|
- Flags stalemate state when board is full.
  - Input: Mark all spaces with no winner.
  - Output: Stalemate = True


## Setup/Installation Requirements

1. Clone repository.
2. Open pig-dice.html in web browser.

## Known Bugs

None.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

_GPL_
