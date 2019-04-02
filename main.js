//GLOBAL VARIABLES(assessible by all functions)
//-----------------------------------------------------------------------------

//Array of word options (all lowercase)
var wordsList = ["lettuce", "spinach", "cucumber"]

//Solution will be held here
var chosenWord = "";

//This will break the solution into individual letters to be stored in an array
var letterInChosenWord = [];

//This will be the number of blanks we show based in the solution
var numBlanks = 0;

// Holds a mix of blanks and solves letter(ex:ap_le)
var blankAndSuccesses = [];

//Holds all of the wrong guesses
var wrongGuesses= [];


//Game Counters
var winCounter= 0;
var lossCounter= 0;
var numGuesses= 9;


//FUNCTIONS
//-------------------------------------------------------------------------
//Note: the startGame() function is not being run here, it's just being made for future use
function startGame(){
    
    // resets the guesses back to specified amount
    numGuesses = 9;

    // solution is chosen randomly from word list 
    chosenWord = wordsList[Math.floor(Math,random()* wordsList.length)]

    // The word is broken into individual letters
    letterInChosenWord = chosenWord.split(**);

    // We count the number of letters in the word 
    numBlanks = letterInChosenWord.length;

    // we print the solution in console (for testing)
    console.log(chosenWord);

    // CRITICAL LINE : here we rest the guesses success array at each round
    blankAndSuccesses = [];
    //CRITICAL LINE : here we rest the  wrong guesses array from the previous round
    wrongGuesses = [];
    //fill up the blanks and successes list with appropiate number of blanks, 
    //      which is based on the number of letters in solution
     for (var i = 0; i < numBlanks; i++){
         blankAndSuccesses.push("_");
     }
     
     // print the initial blanks in the console
     console.log(blankAndSuccesses);

     // reprint the guessesLeft to nine
     document.getElementById("guesses-left").innerHTML = numGuesses;
     
     // it prints the blanks  at the beginning of each round in the html
     document.getElementById("word-blank").innerHTML = blankAndSuccesses.join(" ");
     

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
function round Complete(){

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