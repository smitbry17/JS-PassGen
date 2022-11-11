
var lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];
var special = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getPasswordOptions(){
    var length = parseInt(prompt("How long would you like your password to be?: "),10);

if(Number.isNaN(length)){
    alert("Your password length must be provided as a number.");
    return null;
} 
if(length < 8 ){
    alert("your password is not long enough.");
    return null;
}
if(length > 128){
    alert("your password is too long. ");
    return null;
}
var useSpecial = confirm("Click OK to use special characters in your password.");
var useUpper = confirm("Click OK to use uppercase letters in your password.");
var useLower = confirm("Click OK to use lowercase letters in your password.");
var useNumbers = confirm("Click OK to use numbers in your password. ");

if(useSpecial === false && useUpper === false && useLower === false && useNumbers === false){
    alert("You must select atleast one option for the password. ");
    return null;
}

var passwordChoice = {
    length: length,
    useSpecial: useSpecial,
    useUpper: useUpper,
    useLower: useLower,
    useNumbers: useNumbers,

};

return passwordChoice;

}

function getRandom(arr){
    var randGen = Math.floor(Math.random() * arr.length);
    var randElement = arr[randGen]

    return randElement;
}
function generatePassword(){
    var choice = getPasswordOptions();

    var result = [];

    var potentialCharacters = [];

    var guaranteedCharacters = [];
     
    if(!choice) return null;

    if(choice.useSpecial){
        potentialCharacters = potentialCharacters.concat(special);
        guaranteedCharacters.push(getRandom(special));

    }
    if(choice.useUpper){
        potentialCharacters = potentialCharacters.concat(upperCase);
        guaranteedCharacters.push(getRandom(upperCase));

    }
    if(choice.useLower){
        potentialCharacters = potentialCharacters.concat(lowerCase);
        guaranteedCharacters.push(getRandom(lowerCase));
    }
    if(choice.useNumbers){
        potentialCharacters = potentialCharacters.concat(numbers);
        guaranteedCharacters.push(getRandom(numbers));
    }

    for(var i = 0; i < choice.length; i++){
    var potentialCharacter = getRandom(potentialCharacters);
    result.push(potentialCharacter);
    }

    for(var i = 0; i < guaranteedCharacters.length; i++){
        result[i] = guaranteedCharacters[i];
    }
    
    return result.join(" ");
}

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