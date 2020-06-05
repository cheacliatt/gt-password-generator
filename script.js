// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// This inquires how long the password will be
function writePassword() {
  var lengthOfPassword = prompt("Please entire desired password's length.");
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please enter a number between 8-128");
    return writePassword();
  } else if (isNaN(lengthOfPassword)) {
    alert("Please enter a valid number.");
    return writePassword();
  }
  console.log(lengthOfPassword);
  // End of Password Length

  
    var uppers = confirm("Would you like to include uppercase letters?");
    var lowers = confirm("Would you like to confirm lowercase letters?");
    var numbers = confirm("Would you like to include numbers?");
    var specials = confirm("Would you like to include numbers?");

    var upperArray = [A-Z];
    var lowerArray = [a-z];
    var numbersArray = [0-9];
    var specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    var userChoices = [];

    if (uppers === true) {
      userChoices = push(upperArray);
    }
    if (lowers === true) {
      userChoices = push(lowerArray);
    }
    if (numbers === true) {
      userChoices = push(numbersArray);
    }
    if (specials === true) {
      userChoices = push(specialsArray);
    }
    console.log(userChoices);
  
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
