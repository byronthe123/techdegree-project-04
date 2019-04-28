# Project 4 - Phrase Hunter

This project uses JavaScript to add functionality to a hangman-type game where the user guesses the phrase by using a physical or on-screen keyboard. **Aiming for exceeds expectations**.


## Programming Approach

This project uses OOP principles so that the *Game* and *Phrase* classes interact to form the functionality for the game. 

## Personalized Styles:
1. A fade animation has been added to the overlay so that it fades out instead of vanishing immediately. The functionality is not affected. See *fadeOut* class.
2. If the player correctly guesses the phrase, a *showWin* class is applied to the phrase list items/letters so that they appear in a yellow background and with a larger font size.
3. To show the phrase letters in using *showWin* class, a setTimeout method was used to delay the gameover method for 500 miliseconds. If this method was not applied, the gameover method immediatly fires and the effect can't be seen.

## Syntax and Conventions

The app is written in vanilla ES6 JavaScript. 
