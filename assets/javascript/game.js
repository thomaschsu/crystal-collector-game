// Game resets with new numbers after win or loss

// Variables
var crystals = $("#crystals");
var total = $("#total");
var random = $("#random-number");
var wins = $("#win");
var losses = $("#losses");
var crystalNumberArray = [];
var score = 0;
var win = 0;
var loss = 0;

// Main Random number is a number 19 - 120
var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;

// 4 Crystal Random number is a number 1-12
var crystalNumber1 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalNumber2 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalNumber3 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalNumber4 = Math.floor(Math.random() * (12 - 1)) + 1;

// ----------------------------------------------------------------------------------------

// jQuery
$(document).ready(function() {
    total.text('Your total score: ' + score);

    // Add randomNumber to page
    random.text(randomNumber);

    // 4 crystals, each one has a random number but number is hidden
    for (var i = 1; i < 5; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "assets/images/crystal-"+ [i] +".jpg");
        crystalNumberArray.push(crystalNumber1, crystalNumber2, crystalNumber3, crystalNumber4);
        imageCrystal.attr("data-crystalvalue", crystalNumberArray[i]);
        crystals.append(imageCrystal);
    }

    // Win & loss text
    wins.text('Wins: ' + win);
    losses.text('Losses: ' + loss);

    // Each time crystal is clicked, add the points to the total score
    crystals.on("click", ".crystal-image", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        // Update score with crystalValue
        score += crystalValue;
        total.text('Your total score: ' + score);

        // If score matches the randomNumber, you get a win
        if (score === randomNumber) {
            win++;
            wins.text('Wins: ' + win);
        
        // If score goes over the randomNumber, you get a loss
        } else if (score >= randomNumber) {
            loss++;
            losses.text('Losses: ' + loss);
        }
    })
});