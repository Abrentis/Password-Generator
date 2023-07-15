// Assignment Code
var generateBtn = document.querySelector("#generate");
var completeArray = "";
var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbersArray = "0123456789".split("");
  // 32 special characters
var specialCharactersArray = ["\`", "\~", "\!", "\@", "\#", "\$", "\%", "\^", "\&", "\*", "\(", "\)", "\-", "\_", "\=", "\+", "\[", "\{", "\]", "\}", "\;", "\:", "\'", "\"", "\\", "\|", "\,", "\<", "\.", "\>", "\/", "\?"];

console.log(lowerCaseArray);
console.log(upperCaseArray);
console.log(numbersArray);
console.log(specialCharactersArray);

function generatePassword() {
  // Establishing length of password
  var passwordLength = prompt("How many characters would you like your password to have? (Minimum: 8 | Maximum: 128)");
  if (!passwordLength) {
    return;
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    var invalidLength = alert("Please enter a number from 8 to 128.");
    generatePassword();
  }
  else {
    password.length = passwordLength;
  };

  // Establishing lowercase characters
  var passwordLowerCase = confirm("Press OK to confirm including lowercase letters.");
  if (passwordLowerCase) {

  }
  else {

  };

  // Establishing uppercase characters
  var passwordUpperCase = confirm("Press OK to confirm including uppercase letters.");
  if (passwordUpperCase) {

  }
  else {

  };

  //Establishing special characters
  var passwordSpecialCharacters = confirm("Press OK to confirm including special characters.");
  if (passwordSpecialCharacters) {

  }
  else {

  };
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
