// Random number is a number 19 - 120
var randomNumber = Math.floor(Math.random() * (120 - 19) ) + 19;
console.log(randomNumber);

$(document).ready(function(){
    $("#random-number").append(randomNumber);
});