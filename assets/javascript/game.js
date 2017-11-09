// declare variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuess = []; //this is the array that will hold the guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Guess what letter I'm thinking of

document.onkeyup = function(event) {
    //when player enters a key, displays to the screen
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userGuess.push(guess);
    document.getElementById("guesses").innerHTML = "Your guesses so far: " + userGuess;
    if (guess === computerGuess) {
        //if guesses if correct, then add 1 to wins and game resets and picks new letter.
        // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
        wins++;
        guessesLeft = 10;
        userGuess.length = 0;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("guessesLeft").innerHTML = "You Win!!!, Play again!!!";
        console.log("you won!");

    }
    if (guess !== computerGuess) {
        //guesses left display on screen decrements by one
        guessesLeft--
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
        guessesLeft = 10;
        userGuess.length = 0;
    }
};









// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)



// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).