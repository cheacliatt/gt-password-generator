// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthOfPassword = prompt("Please entire desired password's length.")
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Please enter a number between 8-128");
    return;
  } else if (isNaN(lengthOfPassword)) {
    alert("Please enter a valid number.");
    return;
  } 

  console.log(lengthOfPassword);







  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
