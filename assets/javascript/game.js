// declare variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuess = []; //this is the array that will hold the guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Guess what letter I'm thinking of

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Psychic thinks of this letter: " + computerGuess);

document.onkeyup = function(event) {
    //when player enters a key, displays to the screen
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("User Guess: " + guess);
    userGuess.push(guess);
    document.getElementById("guesses").innerHTML = "Your guesses so far: " + userGuess;
    if (guess === computerGuess) {
        //if guesses if correct, then add 1 to wins and game resets and picks new letter.
        // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
        // computerGuess;
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("guessesLeft").innerHTML = "You Win!!!, Play again!!!";
        console.log("you won!");
        reset();

    }

    if (guess !== computerGuess) {
        //guesses left display on screen decrements by one

        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
    }

    // Losses: (# of times the user has failed to guess the
    // letter correctly after exhausting all guesses)
    //if no guesses right, losses goes up by 1 on the screen
    //guesses goes back to 9 and typed letters disappear
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessesLeft").innerHTML = "You Lost!, Try again";
        console.log("You lost!!");
        reset();

    }

    function reset() {
        // use guesses left and user guesses  try to reset the computer guess
        guessesLeft = 10;
        userGuess.length = 0;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("Psychic thinks of another letter: " + computerGuess);
    }

};
