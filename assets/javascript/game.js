// Variables
var score = 0;
var crystals = $("#crystals");

// Main Random number is a number 19 - 120
var randomNumber = Math.floor(Math.random() * (120 - 19) ) + 19;

// Crystal Random number is a number 1-12
var crystalNumber = Math.floor(Math.random() * (12 - 1) ) + 1;

// jQuery
$(document).ready(function(){
    $("#random-number").text(randomNumber);
    $("#total").text('Your total score is:');
    $("#score").text(score);
});