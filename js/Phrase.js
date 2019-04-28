/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     addPhraseToDisplay() {
        const phraseArray = Array.from(this.phrase);
        const phraseUl = document.getElementById('phrase').children[0];
        for(let i = 0; i < phraseArray.length; i++) {
            const currentLetter = phraseArray[i];
            const li = document.createElement('li');
            
            if(currentLetter === ' ') {
                li.innerHTML = `<li class='space'> </li>`;
            } else {
                li.innerHTML = `<li class='hide letter ${currentLetter}'>${currentLetter}</li>`;
            }

            phraseUl.appendChild(li);
        }
     }

     checkLetter(letter) {
        if(this.phrase.indexOf(letter) !== -1) {
            this.showMatchedLetter(letter);
        }
     }


    //  Reval the correctly guessed letter:
     showMatchedLetter(letter) {
        const listItems = document.getElementById('phrase').children[0].children;
        for(let i = 0; i < listItems.length; i++) {
            // console.log(`${listItems[i].textContent} === ${letter}`);
            if(listItems[i].textContent === letter) {
                listItems[i].innerHTML = `<li class="show letter ${letter}">${letter}</li>`;
            }
        }
     }
 }