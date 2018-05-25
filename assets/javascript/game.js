var hpChar1 = 100;
var hpChar2 = 100;
var hpChar3 = 100;
var hpChar4 = 100;

$(document).ready(function(){
// Add 4 characters with HP / Attack Power / Counter-attack Power
$("#character-1").append("<div class='char-container'><p class='char-title'>Hodor the Greatest</p><img src='assets/images/char1.jpg'></div>");
$("#character-1").after(hpChar1);
$("#character-2").append("<div class='char-container'><p class='char-title'>Tyrion the Imp</p><img src='assets/images/char2.jpg'></div>");
$("#character-2").after(hpChar2);
$("#character-3").append("<div class='char-container'><p class='char-title'>Night King</p><img src='assets/images/char3.jpg'></div>");
$("#character-3").after(hpChar3);
$("#character-4").append("<div class='char-container'><p class='char-title'>Olly the Traitor</p><img src='assets/images/char4.jpg'></div>");
$("#character-4").after(hpChar4);
// Player on click selects one of the 4 characters. That character is then moved to your character section
// Enemies are moved to enemies available to attack
// Player clicks on enemy, enemy is moved to defender area
// Player clicks attack button, opponent loses HP
// Opponent counter attacks
// If reduced to zero or below, remove enemy from defender area, and choose new enemy
// If lose, display game over
// Player wins game by defeating all enemies
});