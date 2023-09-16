var gameBoard = (function() {
    let board = [
        ["0", "0", "0",],
        ["0", "0", "0",],
        ["0", "0", "0",], 
    ];
    return {board}
})();

// Tell when player can input dom element
var displayController = (function() {
    let isPlayer1turn = true;
    let currentSymbol = "";
    function takeTurn() {
        const status = document.getElementsByClassName("status")[0];
        if (isPlayer1turn) {
            status.innerHTML = `${Player1.name}, make your move.`
            isPlayer1turn = false;
            currentSymbol = Player2.symbol;
        }
        else {
            status.innerHTML = `${Player2.name}, make your move.`
            isPlayer1turn = true;
            currentSymbol = Player1.symbol;
        }
        // Gets 2 players, making use of symbol and name
        // Let player1 alter the board by clicking on an element and using their symbol
        // Set isPlayer1turn to false, allowing player 2 to use their symbol
        // If tile is not empty, prompt player to enter again
    }
    const drawBoard = () => {
        const boardgrid = document.getElementsByClassName("board")[0]
        boardgrid.innerHTML = "";
        // Iterate through grid
        // Each of the tiles should be given a value via index which corresponds to a TTT tile
        // That value can be used in a switch statement to determine the target tile to be edited.
        let index = 0;
        for (row of gameBoard.board) {
            for (item of row) {
                index++;
                // Creates a tile that can be clicked
                let new_item = document.createElement("div");
                new_item.className = "board-item";
                new_item.innerHTML = item;
                new_item.setAttribute("value", index);
                new_item.addEventListener('click', function(e) {
                    takeTurn();
                    tileValue = e.target.getAttribute('value');
                    changeTile(tileValue);
                })
                boardgrid.appendChild(new_item);
            }
        }
    }

    // The function that actually changes the board should be private
    function changeTile (tilevalue) {
        switch (tilevalue) {
            case "1": 
                if (!gameBoard.board[0][0].includes("0")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                }
                else {
                    gameBoard.board[0][0] = currentSymbol;
                }
                drawBoard();
                break;
            case "2": 
                if (!gameBoard.board[0][1].includes("0")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                }
                else {
                    gameBoard.board[0][1] = currentSymbol;
                }
                drawBoard(); 
                break;
        }
    }
    return {takeTurn, drawBoard};
})();

function newPlayer(symbol, name) {
    return {symbol, name};
};

let Player1 = newPlayer("O", "Player 1")
let Player2 = newPlayer("X", "Player 2")

displayController.drawBoard();