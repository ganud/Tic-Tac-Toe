var gameBoard = (function() {
    let board = [
        [0, 0, 0,],
        [0, 0, 0,],
        [0, 0, 0,], 
    ];
    const writeBoard = () => {
        const boardgrid = document.getElementsByClassName("board")[0]
        boardgrid.innerHTML = "";
        // Iterate through grid
        for (row of board) {
            for (item of row) {
                let new_item = document.createElement("div");
                new_item.className = "board-item";
                new_item.innerHTML = item;
                boardgrid.appendChild(new_item);
            }
        }
    }

    return {writeBoard}
})();

// Tell when player can input dom element
var displayController = (function() {
    // Boolean displays if it is Player 1's turn(true initially)
    // Have an HTML element display Player 1's turn
    // Player 1 clicks on an empty square during their turn
    //
})();

function newPlayer(symbol, name) {
    return {symbol, name};
};

let Player1 = newPlayer("O", "Player 1")
let Player2 = newPlayer("O", "Player 2")