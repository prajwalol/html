var player = "X";
var gameover = false;
var bot = "O";

function play(cell) {
    if (cell.innerHTML !== "" || gameover) {
        return;
    }
    cell.innerHTML = player;
    if (checkwin()) {
        gameover = true;
        alert(player + " wins!");
        return;
    }
    if (isfull()) {
        gameover = true;
        alert("Draw!");
        return;
    }
    player = player === "X" ? "O" : "X";
    if (player === bot) {
        botplay();
    }
}

function botplay() {
    var cells = document.getElementsByTagName("td");
    var emptyCells = [];
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML === "") {
            emptyCells.push(cells[i]);
        }
    }
    var randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    randomCell.innerHTML = bot;
    if (checkwin()) {
        gameover = true;
        alert(bot + " wins!");
        return;
    }
    if (isfull()) {
        gameover = true;
        alert("Draw!");
        return;
    }
    player = "X";
} < p > In this modified code, a new variable bot is introduced to hold the symbol used by the bot.The play

function is modified to call the botplay

function
if the current player is the bot.The botplay

function first gets all the empty cells on the board, selects a random empty cell, fills it with the bot 's symbol, and then checks if there is a win or draw. If the game is not over, it switches back to the player'
s turn.

With this modification, when it is the bot 's turn, it will select a random empty cell and fill it with its symbol, making the game a two-player game against the bot.</p>