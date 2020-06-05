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

  // This makes a Super Array called userChoices
  var upperArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var specialsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var userChoices = [];

  var uppers = confirm("Press 'OK' to include Uppercase Letters. Otherwise, press 'Cancel.'");
  var lowers = confirm("Press 'OK' to confirm Lowercase Letters. Otherwise, press 'Cancel.'");
  var numbers = confirm("Press 'OK' to include Numbers. Otherwise, press 'Cancel.'");
  var specials = confirm("Press 'OK' to include Special Characters. Otherwise, press 'Cancel.'");

  var userChoices = [];

  if (uppers === true) {
    userChoices = userChoices.concat(upperArray);
  }
  if (lowers === true) {
    userChoices = userChoices.concat(lowerArray);
  }
  if (numbers === true) {
    userChoices = userChoices.concat(numbersArray);
  }
  if (specials === true) {
    userChoices = userChoices.concat(specialsArray);
  } else if (
    uppers === false &&
    lowers === false &&
    numbers === false &&
    specials === false
  ) {
    alert("Please enter at least one option.");
    return writePassword();
  }
  console.log(userChoices);
  // End of the Super Array maker

  
  // For Loop to randomly pull number from userChoices length, then add random index from super array into password 
  var password = ""

  for (var i = 0; i < lengthOfPassword; i++) {
    var randomNumber = Math.floor(Math.random() * userChoices.length);
    console.log(randomNumber);
    password += userChoices[randomNumber];
  }
  // End of For Loop, and the creation of user password 

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
