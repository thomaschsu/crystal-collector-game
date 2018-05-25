// Add 4 characters with HP / Attack Power / Counter-attack Power
var char1 = {
    hp: 150,
    attack: 8,
    counter: 20
};
var char2 = {
    hp: 150,
    attack: 8,
    counter: 20
};
var char3 = {
    hp: 150,
    attack: 8,
    counter: 20
};
var char4 = {
    hp: 150,
    attack: 8,
    counter: 20
};

$(document).ready(function(){
// Create character title and append images to ID's
$("#character-1").append("<div class='char-container'><p class='char-title'>Hodor the Greatest</p><img src='assets/images/char1.jpg'></div>");
$("#character-1").after(char1.hp);
$("#character-2").append("<div class='char-container'><p class='char-title'>Tyrion the Imp</p><img src='assets/images/char2.jpg'></div>");
$("#character-2").after(char2.hp);
$("#character-3").append("<div class='char-container'><p class='char-title'>Night King</p><img src='assets/images/char3.jpg'></div>");
$("#character-3").after(char3.hp);
$("#character-4").append("<div class='char-container'><p class='char-title'>Olly the Traitor</p><img src='assets/images/char4.jpg'></div>");
$("#character-4").after(char4.hp);

// Player on click selects one of the 4 characters. That character is then moved to your character section
$("#hero").append("<h4>Your Character</h4>");
// Enemies are moved to enemies available to attack
// Player clicks on enemy, enemy is moved to defender area
// Player clicks attack button, opponent loses HP
// Opponent counter attacks
// If reduced to zero or below, remove enemy from defender area, and choose new enemy
// If lose, display game over
// Player wins game by defeating all enemies
});