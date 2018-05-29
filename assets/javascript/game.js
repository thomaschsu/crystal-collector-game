// Current Bugs:
// 1. Crystalvalue does not change on game restart

$(document).ready(function() {
    // Main Random number is a number 19 - 120
    var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    
    // Variables
    var crystals = $("#crystals");
    var total = $("#total");
    var random = $("#random-number");
    var wins = $("#win");
    var losses = $("#losses");
    var msg = $("#msg");
    var score = 0;
    var win = 0;
    var loss = 0;
    var crystalNumberArray = [];

    function createNumbers() {
        for (var i = 0; i < 4; i++) {
            var crystalNumber = Math.floor(Math.random() * (12 - 1)) + 1;
            crystalNumberArray.push(crystalNumber);
        }
    }

    // Function that resets game
    function resetGame() {
        score = 0;
        randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        total.html("<h3> Your Number: " + score + "</h3>");
        random.html("<h3>" + randomNumber + "</h3>");
        crystalNumberArray = [];
        createNumbers();
    }

    // Initializer
    createNumbers();
    resetGame();

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
        createNumbers();
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
            createNumbers();

        // If score goes over the randomNumber, you get a loss
        } else if (score >= randomNumber) {
            loss++;
            losses.text('Losses: ' + loss);
            msg.text('You lose... D:');
            resetGame();
            createNumbers();
        }
    });
});