// Assignment code here
var numric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialcharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordLength = 8;
var password = "";
var validChars = ""

// Get references to the #generate element
var password = document.getElementById("password");
var generateBtn = document.querySelector("#generate");

if (password) {
  validChars += numric;
}

if (password) {
  validChars += lowercase;
}

if (password) {
  validChars += uppercase;
}

if (password) {
  validChars += specialcharacters;
}

function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
