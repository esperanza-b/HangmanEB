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

}
