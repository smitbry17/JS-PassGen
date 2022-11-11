import upper from './upperCase.json' assert { type: 'json' };
var lowerCase;
var upperCase = upper;
var lowerCase;
var special;
var numbers;

console.log(upper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);