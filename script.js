// Assignment code here
var numric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialcharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = "";
var validChars = "";
var promptLength;
var lowerSelection = false;
var upperSelection = false;
var specialcharactersSelection = false;
var numricSelection = false;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function prompts() {

  promptLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");

  /*
  if (promptLength<8){
    alert("Password length must be a number between 8-128 characters");
  }
  
  if (promptLength>128){
    alert("Password length must be a number between 8-128 characters");
  }
  
  return promptLength;}
  */

  if (confirm("Would you like lowercase characters in your password") == true) {
    lowerSelection = true;
  }

  if (confirm("Would you like uppercase characters in your password") == true) {
    upperSelection = true;
  }

  if (confirm("Would you like numric characters in your password") == true) {
    numricSelection = true;
  }

  if (confirm("Would you like special characters characters in your password") == true) {
    specialcharactersSelection = true;
  }
}

function createPassword() {
  if (password) {
    validChars += numric;
  }

  if (lowerSelection) {
    validChars += lowercase;
  }

  if (upperSelection) {
    validChars += uppercase;
  }

  if (password) {
    validChars += specialcharacters;
  }

}

function generatePassword() {
  password = "";
  for (var i = 0; i < promptLength; i++) {
    var index = Math.floor(Math.random() * validChars.length);
    password += validChars[index];
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  prompts();
  createPassword();
  generatePassword();
  writePassword();
}
)