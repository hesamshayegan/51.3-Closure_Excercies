function guessingGame() {
    let randomNum = Math.floor(Math.random() * 100);

    let hasWon = false;
    let numGuesses = 0;

    return function guess(choice) {

        if (hasWon) return 'The game is over, you already won!'; 

        numGuesses++;

        if (randomNum === choice) {
            hasWon = true
            const guess = numGuesses === 1 ? "guess" : "guesses"
            return  (`You win! You found ${choice} in ${numGuesses} guesses.`);
        }

        else if  (choice < randomNum) return (`${choice} is too low!`);

        else if (choice > randomNum) return (`${choice} is too high!`);
        
    }
    
}


module.exports = { guessingGame };
