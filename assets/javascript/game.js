// Variables
var crystals = $("#crystals");
var total = $("#total");
var random = $("#random-number");
var wins = $("#win");
var losses = $("#losses");
var msg = $("#msg");
var crystalNumberArray = [];
var score = 0;
var win = 0;
var loss = 0;
var randomNumber;
var crystalNumber1;
var crystalNumber2;
var crystalNumber3;
var crystalNumber4;

// Function that resets game
function resetGame() {
    score = 0;
    crystalNumberArray = [];
}

// 4 Crystal Random number is a number 1-12
var crystalNumber1 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalNumber2 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalNumber3 = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalNumber4 = Math.floor(Math.random() * (12 - 1)) + 1;

// Initializers
createNumber();
resetGame();

// Main Random number is a number 19 - 120
function createNumber() {
    randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    crystalNumber1 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystalNumber2 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystalNumber3 = Math.floor(Math.random() * (12 - 1)) + 1;
    crystalNumber4 = Math.floor(Math.random() * (12 - 1)) + 1;

    $(document).ready(function() {
        // Add text to page
        total.html("<h3> Your Number: " + score + "</h3>");
        total.addClass("your-number");

        // Add randomNumber to page
        random.html("<h3>" + randomNumber + "</h3>");
        random.addClass("random-number");

        // 4 crystals, each one has a random number but number is hidden
        for (var i = 1; i < 5; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("src", "assets/images/crystal-" + [i] + ".jpg");
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
            total.html("<h3> Your Number: " + score + "</h3>");

            // If score matches the randomNumber, you get a win
            if (score === randomNumber) {
                win++;
                wins.text('Wins: ' + win);
                msg.text('You win! (:');
                resetGame();

                // If score goes over the randomNumber, you get a loss
            } else if (score >= randomNumber) {
                loss++;
                losses.text('Losses: ' + loss);
                msg.text('You lose... D:');
                resetGame();
            }
        });
    })
};