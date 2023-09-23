A web version of 2 player Tic-Tac-Toe.
![alt text](https://i.imgur.com/aBh2y25.png)

The code is stable, but there are some poor design decisions here and there
- Most of functions are in the displayerController object, but I should've moved the board checking to... the board object
- The checkBoard function is a quick hardcoded implemetation. Also wasn't sure how to solve the code duplication in the switch statement...
    - There's definitely implementations that involve a more dynamic check with for loops, but I wanted to quickly get functionality out of the way first before thinking of optimizing.
- I wrote a lot of jank pseudocode to decide on the turn control flow. My solution was to alternate the current symbol everytime changeTile was called, but I still left a lot of duplicated code. The checkBoard function is truly egregious in that regard.