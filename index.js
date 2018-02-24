var prompt = require("prompt");
var Word = require('./word.js');
var userGuesses = 10;
var zeldaCharacters = ["zelda","ruto","link","ganondorf","tingle","midna", "sheik", "epona", "saria", "urbosa", "zant", "navi"];
var randomCharacter = zeldaCharacters [Math.floor(Math.random() * zeldaCharacters.length)];
var currentWord = new Word(randomCharacter);
    
    // Starts the prompt
    prompt.start();
    // Runs beginGame function.
    beginGame();

    function beginGame(){
        console.log("--------------------------------------");
        console.log("It is up to you to save Hyrule! Solve this puzzle by decoding the Zelda character to win.");
        console.log("Guesses left: " + userGuesses);
        // If the current word displayed matches the word that needs to be guessed the user wins.
        if(currentWord.comparingWords() == true){
            console.log("======================================");
            console.log("Correct, the character is " + randomCharacter + "! You saved Hyrule!");
            return;
        }
        // If the userGuesses equal zero, they lose.
        if(userGuesses <= 0){
            console.log("======================================");
            console.log("Wrong, the character is " + randomCharacter + "! Hyrule has fallen. Game over.");
            return;
        }
		// Displays the current word and any underscores where letters still need to be guessed.
        console.log(currentWord.display());
        console.log("======================================");
    
    // The prompt that asks the user to Guess a Letter
	prompt.get(["Guess a Letter"], function(err, result){
		if(err){
			return err;
		}
        // Compare the letter to the letters in the random Zelda character
        //If there is no match userGuesses is recuded by 1
		if(currentWord.findLetters(result.Guess) == false){
			userGuesses --;
        }
        
        // Run begin game function again to keep it going until user wins or leses.
		beginGame();

	});
}