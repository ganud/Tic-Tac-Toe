var gameBoard = (function() {
    let board = [
        [0, 0, 0,],
        [0, 0, 0,],
        [0, 0, 0,], 
    ];
    const writeBoard = () => {
        const boardgrid = document.getElementsByClassName("board")[0]
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

var displayController = (function() {

})();

function newPlayer(symbol, name) {
    return {symbol, name};
};

let Player1 = newPlayer("O", "Player 1")
let Player2 = newPlayer("O", "Player 2")