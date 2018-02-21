// Constructor function for creating Letter objects
var Letter = function(ltr){
    // Defaullt current is a blank space
    this.current = "_"
    // Setting the ltr object to the inputted letter
    this.ltr = ltr;
	// Display set to false
    this.displayLetter = false;
    // Checks to see if letter matches a letter in the game
	this.isLetter = function(letter){
        // If it does, it sets it as the current object
		if (this.ltr == letter){
			this.current = this.letr; 
			return true;
        } else {
            return false;
        }
	}
	// This method decides if "_" or a letter is displayed
	this.displayThis = function(){
		return this.current;
	}
};

module.exports = Letter;