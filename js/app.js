/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnStartGame = document.querySelector('#btn__reset');
var game;

// Handle start game:
btnStartGame.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

// Add click event listener to keys using event delegation:
document.addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        game.activePhrase.checkLetter(e.target.innerHTML);
        game.handleInteraction(e);
    }
});

document.addEventListener('keydown', (e) => {
    game.activePhrase.checkLetter(e.key);
    game.handleInteraction(e);
});
