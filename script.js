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
    let isPlayer1turn = true;
    function takeTurn() {
        const status = document.getElementsByClassName("status")[0];
        if (isPlayer1turn) {
            status.innerHTML = `${Player1.name}, make your move.`
            isPlayer1turn = false;
        }
        else {
            status.innerHTML = `${Player2.name}, make your move.`
            isPlayer1turn = true;
        }
        // Gets 2 players, making use of symbol and name
        // Let player1 alter the board by clicking on an element and using their symbol
        // Set isPlayer1turn to false, allowing player 2 to use their symbol
        // If tile is not empty, prompt player to enter again
    }
    return {takeTurn};
})();

function newPlayer(symbol, name) {
    return {symbol, name};
};

let Player1 = newPlayer("O", "Player 1")
let Player2 = newPlayer("O", "Player 2")

gameBoard.writeBoard();