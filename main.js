//GLOBAL VARIABLES(assessible by all functions)
//-----------------------------------------------------------------------------

//Array of word options (all lowercase)
var wordsList = ["lettuce", "spinach", "cucumber"]

// Solution will be held here

var chosenWord = "";

// This will break the solution into individual letters to be stored in an array.

var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution

var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: a_p_le)

var blanksAndSucesses = [];

// Holds all of the wrong guesses

var wrongGuesses = [];

// Game counters

var winCounter = 0;

var lossCounter = 0;

var numGuesses = 9;

// FUNCTIONS

// ------------------------------------------------------

/* It's how we'll start and restart the game. It's not being run here. It's

just being made for future use. */

function startGame()
{

// Starts over the guesses at specified number

numGuesses = 9;

// Solution is chosen randomly from wordList

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

// The word is broken into individual letters

lettersInChosenWord = chosenWord.split("");

// We count the number of letters in the word

numBlanks = lettersInChosenWord.length;

// We print the solution in the console (for testing)

console.log(chosenWord);

// CRITICAL LINE - Here we reset the guess and success array at each round

blanksAndSucesses = [];

// CRITICAL LINE - Here we reset the wrong guesses from the previous round

wrongGuesses = [];

// Fill up the blanksAndSucusses list with approopriate number of blanks,

// which is based on the number of letters in solution

for (var i = 0; i < numBlanks; i++){

blanksAndSucesses.push("_");

}

// Print the initial blanks in console.

console.log(blanksAndSucesses);

// Reprints the guessesLeft to 9

document.getElementById("guesses-left").innerHTML = numGuesses;

// Prints the blanks at the beginning of each round in the HTML

document.getElementById("word-blanks").innerHTML = blanksAndSucesses.join(" ");

// Clears the wrong guesses form the previous round

document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}
     

}

// Where we'll put all comparisons for matches
function checkLetter(letter) {
 // This boolean will be toogled based on whether or not a user letter is found in the word
 var letterWord = false;

 //check if letter exists inside the array at all
for (var i = 0; i < numBlanks; i++ ) {

    if (chosenWord [i] == letter){
        //if the letter exists then  toggle this boolean to be true. This will used in the next step
        letterInWord = true;
    }
}
  // if the letter exists somewhere in the word , then figure out where
  if (letterInWord) {


      //Loop though the word
      for (var j = 0; j< numBlanks; j++){

        //Populate the blanckAndSuccesses with every instance of the letter 
        if (chosenWord[j])

      }
          
      }

      //Logging for testing
      console.log(blankAndSuccesses)
  }
}

//If the letter doesn't exist exist at all.....
else{

     // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses
     wrongGuesses.push(letter);
     numGuesses--;
  }
}
//Here we will have all code that need to be run after each guess is made
function roundComplete(){

    //First, log an initial status update to the console telling
    console.log(`WinCount: ${winCounter} | LossCount: ${lossCounter} | NumGuesses: ${numGuesses}`);
    
    //Update the HTML to reflect thr new number of guesses.Also update the correct number of guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;
     
    //This will print the array of guesses and blanks onto the page 
     document.getElementById("word-blanks").innerHTML = blankAndSuccesses.join("");

     //This will print the number of wrong guesses onto page
     document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join("");

     //If we have gotten all the letters to match the solution...
     if(letterInChosenWord.toString() === blankAndSuccesses.toString()) {

          //...add to the win counter and give user an alert
          winCounter++;
          alert("You Win!");

          //Update the win counter in the HTML and restart the game
          document.getElementById("win-counter").innerHTML = winCounter;
          startGame();
     }
     //If we run out of guesses...
     else if (numGuesses === 0) {

        //Add to the loss counter
        lossCounter++;

        //Give the user an alert
        alert("You Lose");

        //Update the loss counter in the HTML
        document.getElementById("lose-counter"),innerHTML = lossCounter;
        
        //Restart the game
        startGame();


     }

}

//MAIN PROCESS this is the code that contolls wghat is actually run
//----------------------------------------------------------------------------------------
//Starts the GAME
startGame();

//Then initiate the function for capturing key clicks
document.onkeyup = function(event){

//Converts all key clicks to lowercase letters
var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase

//Run the code to check for corrections
checkLetter(letterGuessed);

//Runs the code after each round is done
roundComplete();
}