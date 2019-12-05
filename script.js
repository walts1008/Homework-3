// funtion

console.log ("hi")
function generatePassword() {
    var length = 8,
        value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = value.length; i < length; i++) {
        retVal += value.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
var generateButton = document.getElementById("generate")
var displayPassword = document.getElementById("password")
console.log ("g",displayPassword)

generateButton.addEventListener("click", function() {
 
 displayPassword.value= generatePassword()

}); 
  