var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Resets variables to empty values if a user presses the button 'Generate Password' more than once
  var completeArray = [];
  var passwordName = [];
  var passwordText = document.querySelector("#password")
  passwordText.value = "";

  // Establishes length of password
  var passwordLength = prompt("How many characters would you like your password to have? (Minimum: 8 | Maximum: 128)");
  
      // Closes window when user presses 'Cancel'
    if (!passwordLength && passwordLength == null) {
      return;
    }
      // Resets if user enters a number or character outside of the specified character limits
    else if ((isNaN(passwordLength)) || (passwordLength == null) || (passwordLength < 8 || passwordLength > 128)) {
      alert("Please enter a number from 8 to 128.");
      generatePassword();
    return;
  }
 
  // Includes lowercase characters
  var passwordLowerCase = confirm("Press OK to confirm including lowercase letters in your password.");
  if (passwordLowerCase) {
    var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
    completeArray.push(...lowerCaseArray);
  };

  // Includes uppercase characters
  var passwordUpperCase = confirm("Press OK to confirm including uppercase letters in your password.");
  if (passwordUpperCase) {
    var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    completeArray.push(...upperCaseArray);
  };

  // Includes numbers
  var passwordNumbers = confirm("Press OK to confirm including numbers in your password.")
  if (passwordNumbers) {
    var numbersArray = "0123456789".split("");
    completeArray.push(...numbersArray);
  };

  // Includes special characters
  var passwordSpecialCharacters = confirm("Press OK to confirm including special characters in your password.");
  if (passwordSpecialCharacters) {
    var specialCharactersArray = ["\`", "\~", "\!", "\@", "\#", "\$", "\%", "\^", "\&", "\*", "\(", "\)", "\-", "\_", "\=", "\+", "\[", "\{", "\]", "\}", "\;", "\:", "\'", "\"", "\\", "\|", "\,", "\<", "\.", "\>", "\/", "\?"];
    completeArray.push(...specialCharactersArray);
  };

  // 'For loop' that executes until the desired password length is reached
  for (i = 0; i < passwordLength; i++) {
    var passwordCalc = Math.floor(Math.random() * completeArray.length);
    var passwordName = completeArray[passwordCalc];
    var passwordText = document.querySelector("#password").value += (passwordName);
  };
};

// Event listener that responds to the button being clicked, then executes 'generatePassword' function
generateBtn.addEventListener("click", generatePassword);
