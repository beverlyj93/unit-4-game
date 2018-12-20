// Global Variables
var randomScore = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;

// On Page Load
$(document).ready(function() {
    onGameLoad();
})

$('img').click(function() {
    currentScore += parseInt($(this).attr("value"));
    $('#score').text(currentScore);

    if(currentScore == randomScore) {
        wins++;
        $('#win').text(wins);
        onGameLoad();
    }
    else if(currentScore > randomScore) {
        losses++;
        $('#loss').text(losses);
        onGameLoad();
    }
})

// Functions

function onGameLoad() {
    currentScore = 0;
    $('#score').text("0");

    for(var i = 1; i < 5; i++) {
        $('#crystal-' + i).attr("value", Math.floor(Math.random() * 10));
    }
    randomScore = Math.floor(Math.random() * 99);

    $('.random-number').text(randomScore);
}