/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = ['css is cool', 'js is joy', 'html is hot', 'more mongo', 'code all day'];
        this.activePhrase = null;
     }

     startGame() {
        // 1: Hide start screen overlay:
        document.querySelector('#overlay').classList.add('fadeOut');
        // document.querySelector('#overlay').style.display = 'none';

        // 2: Reset the gameboard:
        this.resetBoard();

        // 3: Set a random active phrase:
        this.activePhrase = this.getRandomPhrase();

        // 4: call addPrhaseToDisplay()
        this.activePhrase.addPhraseToDisplay();
     }

     //  Return a random phrase:
     getRandomPhrase() {
        const randomNum = Math.round(Math.random() * (this.phrases.length - 1));
        const phrase = new Phrase(this.phrases[randomNum]);
        return phrase;
     }

     handleInteraction(e) {
        let target;

        // If the user uses the keyboard, the value of the key is used:
        if(e.type === 'keydown') {
            const keys = document.querySelectorAll('.key');
            for(let i = 0; i < keys.length; i++) {
                if(keys[i].textContent === e.key) {
                    target = keys[i];
                }
            }
        } else {
            target = e.target;
        }


        // Check if the guess is correct or incorrect:
        if(target !== undefined) {
            if(!target.disabled) {
                if(this.activePhrase.phrase.indexOf(target.innerHTML) === -1) {
                    target.classList.add('wrong');
                    this.removeLife();
                } else {
                    target.classList.add('chosen');
                    if(this.checkForWin()) {
                        this.gameOver('win', 2000);
                    };
                }
            }

            //  Disable the clicked button,:
            target.setAttribute('disabled', 'true');
        }
     }
o
     removeLife() {
        this.missed++;

        // Replace liveHeart images with lostHearts:
        const tries = document.querySelectorAll('.tries');
        tries[this.missed - 1].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';
     
    
        if(this.missed === 5) {
            this.gameOver('lose', 0);
        }
    }

     checkForWin() {
        const listItems = document.getElementById('phrase').children[0].children;
        let status = true;
        for(let i = 0; i < listItems.length; i++) {
            if(listItems[i].innerHTML.toString().includes('hide')) {
                status = false;
            }
        }
        return status;
     }
     
     /*  
        I added a setTimeout method to add a delay before showing the game over screen so the
        user can see the complete phrase if they guessed it correctly.
    */
     gameOver(loseOrWin, delay) {
        if(loseOrWin === 'win') {
            const listItems = document.getElementById('phrase').children[0].children;
            for(let i = 0; i < listItems.length; i++) {
                if(listItems[i].textContent !== ' ') {
                    listItems[i].innerHTML = `<li class="showWin letter ${listItems[i].textContent}">${listItems[i].textContent}</li>`;
                }
            }
        }
        setTimeout(() => {
            document.querySelector('#overlay').style.display = 'block';
            document.querySelector('#game-over-message').textContent = `You ${loseOrWin}!`;
            document.querySelector('#overlay').className = `${loseOrWin}`;

        }, delay);
     }

     resetBoard() {
        //  Remove all li elements from the phrase ul:
        document.getElementById('phrase').children[0].innerHTML = '';

        // Reset hearts:
        document.querySelectorAll('.tries').forEach(heart => heart.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">');

        // Enable all keys and reset the classname:
        const keys = document.querySelectorAll('.key');
        for(let i = 0; i < keys.length; i++) {
            keys[i].className = 'key';
            keys[i].disabled = false;
        }

     }

 }