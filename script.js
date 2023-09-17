var gameBoard = (function() {
    let board = [
        [" ", " ", " ",],
        [" ", " ", " ",],
        [" ", " ", " ",], 
    ];

    return {board}
})();

// Tell when player can input dom element
var displayController = (function() {
    let isPlayer1turn = true;
    let currentSymbol = "";
    let gameCompleted = false;
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
    }
    const drawBoard = () => {
        const boardgrid = document.getElementsByClassName("board")[0]
        boardgrid.innerHTML = "";
        let index = 0;
        for (row of gameBoard.board) {
            for (item of row) {
                index++;
                // prepares a clickable tile DOM element for a 3x3 grid
                let new_item = document.createElement("div");
                new_item.className = "board-item";
                new_item.innerHTML = item;
                new_item.setAttribute("value", index);
                new_item.addEventListener('click', addTileClick)
                boardgrid.appendChild(new_item);
            }
        }
    }

    // External named function used for the eventlistener
    function addTileClick(eventThingy) {
        tileValue = eventThingy.target.getAttribute('value');
        changeTile(tileValue);
    }
    // The function that actually changes the board should be private
    function changeTile (tilevalue) {
        switch (tilevalue) {
            case "1": 
                if (!gameBoard.board[0][0].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[0][0] = currentSymbol;
                }
                drawBoard();
                break;
            case "2": 
                if (!gameBoard.board[0][1].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[0][1] = currentSymbol;
                }
                drawBoard(); 
                break;
            case "3": 
                if (!gameBoard.board[0][2].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[0][2] = currentSymbol;
                }
                drawBoard(); 
                break;
            case "4": 
                if (!gameBoard.board[1][0].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[1][0] = currentSymbol;
                }
                drawBoard(); 
                break;
            case "5": 
                if (!gameBoard.board[1][1].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[1][1] = currentSymbol;
                }
                drawBoard();
                break;
            case "6": 
                if (!gameBoard.board[1][2].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[1][2] = currentSymbol;
                }
                drawBoard(); 
                break;
            case "7": 
                if (!gameBoard.board[2][0].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[2][0] = currentSymbol;
                }
                drawBoard();
                break;
            case "8": 
                if (!gameBoard.board[2][1].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[2][1] = currentSymbol;
                }
                drawBoard(); 
                break;
            case "9": 
                if (!gameBoard.board[2][2].includes(" ")) {
                    document.getElementsByClassName("status")[0].innerHTML = "That tile is taken.";
                    changeTile();
                }
                else {
                    takeTurn();
                    gameBoard.board[2][2] = currentSymbol;
                }
                drawBoard(); 
                break;     
        }
        checkBoard(Player1);
        checkBoard(Player2);
        checkTie();
        if (gameCompleted == true) {lockBoard()}
    }

    function checkBoard(player) {
        // Check rows
        if (gameBoard.board[0][0] == player.symbol && gameBoard.board[0][1] == player.symbol && gameBoard.board[0][2] == player.symbol) {
            document.getElementsByClassName("status")[0].innerHTML = `${player.name} wins.`
            gameCompleted = true;
        }
        else if (gameBoard.board[1][0] == player.symbol && gameBoard.board[1][1] == player.symbol && gameBoard.board[1][2] == player.symbol) {
            document.getElementsByClassName("status")[0].innerHTML = `${player.name} wins.`
            gameCompleted = true;
        }
        else if (gameBoard.board[2][0] == player.symbol && gameBoard.board[2][1] == player.symbol && gameBoard.board[2][2] == player.symbol) {
            document.getElementsByClassName("status")[0].innerHTML = `${player.name} wins.`
            gameCompleted = true;
        }
        // Check columns
        else if (gameBoard.board[0][0] == player.symbol && gameBoard.board[1][0] == player.symbol && gameBoard.board[2][0] == player.symbol) {
            document.getElementsByClassName("status")[0].innerHTML = `${player.name} wins.`
            gameCompleted = true;
        }
        else if (gameBoard.board[0][1] == player.symbol && gameBoard.board[1][1] == player.symbol && gameBoard.board[2][1] == player.symbol) {
            document.getElementsByClassName("status")[0].innerHTML = `${player.name} wins.`
            gameCompleted = true;
        }
        else if (gameBoard.board[0][2] == player.symbol && gameBoard.board[1][2] == player.symbol && gameBoard.board[2][2] == player.symbol) {
            document.getElementsByClassName("status")[0].innerHTML = `${player.name} wins.`
            gameCompleted = true;
        }
        // Check diagonals
        else if (gameBoard.board[0][0] == player.symbol && gameBoard.board[1][1] == player.symbol && gameBoard.board[2][2] == player.symbol) {
            document.getElementsByClassName("status")[0].innerHTML = `${player.name} wins.`
            gameCompleted = true;
        }
        else if (gameBoard.board[0][2] == player.symbol && gameBoard.board[1][1] == player.symbol && gameBoard.board[2][0] == player.symbol) {
            document.getElementsByClassName("status")[0].innerHTML = `${player.name} wins.`
            gameCompleted = true;
        }
        else {
            // I don't know why, but this gets run, so checkTie is a separate function
        }
    }

    function checkTie() {
        // Checks if all tiles are occupied.
        let count = 0;
        for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                if (!gameBoard.board[i][j].includes(" "))
                {
                    count++;
                }
            }
        }
        if (count == 9) {
            document.getElementsByClassName("status")[0].innerHTML = `Tie`
            gameCompleted = true;
        }
    };

    function lockBoard() {
        const buttons = document.getElementsByClassName("board-item");
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].removeEventListener("click", addTileClick)
        }
    }

    function resetBoard() {
        gameBoard.board = [
            [" ", " ", " ",],
            [" ", " ", " ",],
            [" ", " ", " ",], 
        ];
        isPlayer1turn = true;
        currentSymbol = "";
        gameCompleted = false;
        drawBoard();
    }

    return {drawBoard, resetBoard};
})();

function newPlayer(symbol, name) {
    return {symbol, name};
};
let Player1 = newPlayer("O", "Player 1")
let Player2 = newPlayer("X", "Player 2")

displayController.drawBoard();
const resetButton = document.getElementById('reset');


resetButton.addEventListener('click', displayController.resetBoard)

