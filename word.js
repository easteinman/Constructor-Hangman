// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.


// Requiring the Letter.js file 
var Letter = require('./letter.js');

// Constructor for the Word
var Word = function(theWord){
	// Word to be guessed
    this.theWord = theWord;
    // Array that will hold the letters of the word
    this.theWordsLetters = [];
    // Letters that have been guessed by user
    this.guesses = [];
    // Win boolean
    this.winner = false;

	// Method that grabs and stores the letters of the the word in an array
	this.getLetters = function(){
		for(var i = 0; i <this.theWord.length; i++){
			var theNewLetter = new Letter(this.theWord[i]);
			this.theWordsLetters.push(theNewLetter);

		}
	}
	this.getLetters();

    // This method is used to find if the guessedLetter is in the guesses array 
	this.findLetters = function(guessedLetter){
		for (var i = 0; i <this.guesses.length; i++){
			if (guessedLetter == this.guesses[i]) {
				return true;
			}
        }
        
        console.log(guessedLetter);
        
		var added = false;
        // Pushes the guessed letter to the guesses array
		this.guesses.push(guessedLetter);

		for (var i = 0; i <this.theWordsLetters.length;i++){
            // If the guessed letter is correct/matches one of the letters in the word the letter will now be shown instead of an underscore
			if (this.theWordsLetters[i].isCorrectLetter(guessedLetter)){
				this.theWordsLetters[i].showsLetter = true;
				added = true;
			} 
		}
		return added;

	}

    // This method compares the current word being displayed with the actual word trying to be guessed
 	this.comparingWords = function(){
 		for(var i = 0; i < this.theWord.length; i++){

 			if(this.theWord.charAt(i) != this.theWordsLetters[i].current){
 				return false;
 			}

         }
                // If so, return true
 				return true;
 	}

    // Displays the letters in and empty string
	this.display = function(){
		var emptyString = "";
			
		for (var i = 0; i <this.theWordsLetters.length; i++){
			emptyString += this.theWordsLetters[i].current + " ";
		}
		return emptyString;
	}
}

module.exports = Word;