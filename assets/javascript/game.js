// Each time click on crystal, add the points to the total score
// Goal of game is to match the randomNumber
// If score matches the randomNumber, you get a win
// If score goes over the randomNumber, you get a loss
// Game resets with new numbers afterwards

// Variables
var score = 0;
var crystals = $("#crystals");
var crystalNumberArray = [];

// Functions


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
            // Add randomNumber to page
            $("#random-number").text(randomNumber);

            // 4 crystals, each one has a random number but number is hidden
            for (var i = 0; i < 4; i++) {
                var imageCrystal = $("<img>");
                imageCrystal.addClass("crystal-image");
                imageCrystal.attr("src", "assets/images/crystal-1.jpg");
                crystalNumberArray.push(crystalNumber1, crystalNumber2, crystalNumber3, crystalNumber4);
                imageCrystal.attr("data-crystalvalue", crystalNumberArray[i]);
                crystals.append(imageCrystal);
            }

            crystals.on("click", ".crystal-image", function(){
                var crystalValue = ($(this).attr("data-crystalvalue"));
                    crystalValue = parseInt(crystalValue);
                    score += crystalValue;
                    console.log(score);

                    if (score === randomNumber) {
                        alert("You win!");
                    } else if (score >= randomNumber) {
                        alert("You lose!!");
                    }
            })

            $("#total").text('Your total score is:');
            $("#score").text(score);
        });