// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

//var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //create a variable that takes only the prefixes of the cardNumber
 function detectNetwork(cardNumber) {
  //create a variable that takes only the prefixes of the cardNumber
  var prefixData = cardNumber[0];
  var firstFour = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var result;
  //should look to see if the cardNumber starts with 4, then label network as "Visa"
if (prefixData === "4" )  {
  		if (firstFour === '4903' || firstFour === '4905' || firstFour === '4911' || firstFour === '4936') {
  			result = 'Switch';
 } else {
 			result = "Visa";
 }
 } else if (prefixData === "5") {
  		if (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5') {
    		result = "MasterCard"; 
		} else if (cardNumber[1] === '0') {
			result = 'Maestro';
		}else if (cardNumber[1] === '6') {
			result = 'Switch';
		} else {
 	 		result = 'undefined';
    }
} else if (prefixData === '6' && cardNumber[1] === '2') {
	result = 'China UnionPay';

} else if (firstFour === '6304') {
	result = 'Maestro';
} else if (firstFour === '6331' || firstFour === '6333' || firstFour === '6759') {
	result = 'Switch';
} else if (firstFour === '6011') {
  	result = 'Discover';
} else if (prefixData === '6' && cardNumber[1] === '4') {
  	result = 'Discover';
} else if (prefixData === '6' && cardNumber[1] === '5') {
  	result = 'Discover';
} else if (prefixData === "3" ) {
    	if (cardNumber.length === 15 ){
      		result = "American Express"; 
  } else if (cardNumber.length === 14 ) {
      		result = "Diner\'s Club"; 
  } 	
    
} else {
      result = "undefined";
    }

return result;
}