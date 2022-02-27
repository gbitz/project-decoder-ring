// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //check to make sure alphabet is 26 characters
    if (!alphabet || alphabet.length != 26) {return false}; 

    //check for repeating characters in alphabet
    let letterCheck = {}
    Array.from(alphabet).forEach((letter) => {
      if (!letterCheck[letter]) {
        letterCheck[letter] = 0;
      } 
      letterCheck[letter] +=  1;  
    })
    if (Object.values(letterCheck).every((number) => number <= 1)) {

      //Encode or Decode messages
      let message = input.toLowerCase();
      let charCode = 97;
      let cipher = {};
      let finalMessage = '';
      ///Create substitution alphabet object
      [...alphabet].forEach(letter => {
          cipher = {
            ...cipher,
            [String.fromCharCode(charCode)] : letter 
          }
          charCode++
        });
      //add letters to final message
      Array.from(message).forEach((letter => {
        //encoding a message
        if (letter !=  ' ' && encode) {
          Object.entries(cipher).forEach(([key, value]) => {
            if (key === letter) {
              finalMessage += value;
            }
          })
        //decoding a message  
        } else if (letter !=  ' ' && !encode) {
          Object.entries(cipher).forEach(([key, value]) => {
            if (value === letter) {
              finalMessage += key;
            }
          })
        } else {
          //adds spaces to final message
          finalMessage += letter;
        }
      }));
      return finalMessage
    }
    return false;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
