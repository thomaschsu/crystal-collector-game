$(document).ready(function(){
// Add 4 characters with HP / Attack Power / Counter-attack Power
$("#characters").append("<div class='char-container'><p class='char-title'>Hodor the Great</p><img src='assets/images/char1.jpg'></div>");
$("#characters").append("<div class='char-container'><p class='char-title'>Hodor the Great</p><img src='assets/images/char1.jpg'></div>");
$("#characters").append("<div class='char-container'><p class='char-title'>Tyrion the Imp</p><img src='assets/images/char2.jpg'></div>");
$("#characters").append("<div class='char-container'><p class='char-title'>Night King</p><img src='assets/images/char3.jpg'></div>");
$("#characters").append("<div class='char-container'><p class='char-title'>Olly the POS</p><img src='assets/images/char4.jpg'></div>");
// Player on click selects one of the 4 characters. That character is then moved to your character section
// Enemies are moved to enemies available to attack
// Player clicks on enemy, enemy is moved to defender area
// Player clicks attack button, opponent loses HP
// Opponent counter attacks
// If reduced to zero or below, remove enemy from defender area, and choose new enemy
// If lose, display game over
// Player wins game by defeating all enemies
});