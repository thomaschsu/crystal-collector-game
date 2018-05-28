// Add 4 characters with HP / Attack Power / Counter-attack Power
var char1 = {
    hp: 150,
    attack: 8,
    counter: 20
};
var char2 = {
    hp: 224,
    attack: 8,
    counter: 20
};
var char3 = {
    hp: 123,
    attack: 8,
    counter: 20
};
var char4 = {
    hp: 111,
    attack: 8,
    counter: 20
};

$(document).ready(function(){
// Create character title and append images to ID's
$("#character-1").append("<div class='char-container'><p class='char-title'>Hodor the Great</p><img src='assets/images/char1.jpg'></div>");
$("#character-1").append(char1.hp);
$("#character-2").append("<div class='char-container'><p class='char-title'>Tyrion the Imp</p><img src='assets/images/char2.jpg'></div>");
$("#character-2").append(char2.hp);
$("#character-3").append("<div class='char-container'><p class='char-title'>Night King</p><img src='assets/images/char3.jpg'></div>");
$("#character-3").append(char3.hp);
$("#character-4").append("<div class='char-container'><p class='char-title'>Olly the Traitor</p><img src='assets/images/char4.jpg'></div>");
$("#character-4").append(char4.hp);

// Player on click selects one of the 4 characters. That character is then moved to your character section and enemies are moved to the attack area
$("#hero").append("<h4>Your Character</h4>");
$("#character-1").click(function() {
    $("#character-1").appendTo($("#hero"));
    $("#character-2").appendTo($("#enemies"));
    $("#character-3").appendTo($("#enemies"));
    $("#character-4").appendTo($("#enemies"));
});
$("#character-2").click(function() {
    $("#character-2").appendTo($("#hero"));
    $("#character-1").appendTo($("#enemies"));
    $("#character-3").appendTo($("#enemies"));
    $("#character-4").appendTo($("#enemies"));
});
$("#character-3").click(function() {
    $("#character-3").appendTo($("#hero"));
    $("#character-1").appendTo($("#enemies"));
    $("#character-2").appendTo($("#enemies"));
    $("#character-4").appendTo($("#enemies"));
});
$("#character-4").click(function() {
    $("#character-4").appendTo($("#hero"));
    $("#character-1").appendTo($("#enemies"));
    $("#character-2").appendTo($("#enemies"));
    $("#character-3").appendTo($("#enemies"));
});
// Enemies are moved to enemies available to attack
$("#enemies").append("<h4>Enemies Available To Attack</h4>");
// Player clicks on enemy, enemy is moved to defender area

// Player clicks attack button, opponent loses HP
// Opponent counter attacks
// If reduced to zero or below, remove enemy from defender area, and choose new enemy
// If lose, display game over
// Player wins game by defeating all enemies
});